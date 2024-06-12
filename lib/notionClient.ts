import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN as string,
});

export default notion;
