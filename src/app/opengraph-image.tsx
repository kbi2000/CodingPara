import { ImageResponse } from "next/og";
export const alt = "CodingPara Technologies — digital development and growth";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        background: "#070a0f",
        color: "#f4f7fb",
        fontSize: 72,
        fontWeight: 800,
        letterSpacing: "-3px",
      }}
    >
      <span style={{ color: "#3b82f6" }}>&lt;</span>CodingPara
      <span style={{ color: "#3b82f6" }}>/&gt;</span>
    </div>,
    size,
  );
}
