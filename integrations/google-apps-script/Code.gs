const COLUMNS = [
  "kind",
  "name",
  "email",
  "phone",
  "service",
  "budget",
  "timeline",
  "message",
  "consent",
  "startedAt",
  "receivedAt",
  "ipAddress",
  "userAgent",
];

function doPost(event) {
  try {
    const data = JSON.parse(event.postData.contents);
    const properties = PropertiesService.getScriptProperties();
    const expectedSecret = properties.getProperty("WEBHOOK_SECRET");

    if (!expectedSecret || data.secret !== expectedSecret) {
      return jsonResponse({ ok: false, error: "Unauthorized" });
    }

    const spreadsheetId = properties.getProperty("SPREADSHEET_ID");
    const sheetName = properties.getProperty("SHEET_NAME") || "Leads";
    const recipients = properties.getProperty("LEADS_TO_EMAIL");

    if (!spreadsheetId || !recipients) {
      throw new Error("Missing Apps Script properties");
    }

    const sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName);
    if (!sheet) throw new Error(`Sheet '${sheetName}' was not found`);

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      sheet.appendRow(COLUMNS.map((column) => safeCell(data[column])));
    } finally {
      lock.releaseLock();
    }

    const subject = `${data.kind === "audit" ? "SEO audit request" : "New website enquiry"} from ${data.name}`;
    const body = COLUMNS.map((column) => `${column}: ${data[column] ?? ""}`).join("\n");

    MailApp.sendEmail({
      to: recipients,
      subject,
      body,
      replyTo: data.email,
      name: "CodingPara Website",
    });

    return jsonResponse({ ok: true });
  } catch (error) {
    console.error(error);
    return jsonResponse({ ok: false, error: String(error.message || error) });
  }
}

function safeCell(value) {
  const text = String(value ?? "");
  return /^[=+\-@]/.test(text) ? `'${text}` : text;
}

function jsonResponse(value) {
  return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
