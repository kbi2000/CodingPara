import blog from "./blog.json";

export const blogPage = blog.page;
export const posts = blog.posts;
export type BlogPost = (typeof posts)[number];
