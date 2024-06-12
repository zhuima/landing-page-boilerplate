/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2024-06-11 19:29:42
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2024-06-11 23:22:29
 * @FilePath: /waitlist/app/api/notion/waitlist/route.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import { Client } from "@notionhq/client";

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  try {
    // const result = await addWaitlist(body);
    // console.log(result);
    console.log("Request Body:", body); // 添加日志

    const notion = new Client({ auth: process.env.NOTION_SECRET_AUTH });
    const response = await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_WAITLIST_DATABASE_ID || "",
      },
      properties: {
        Email: {
          email: body?.email,
        },
        // Email: {
        //   title: [
        //     {
        //       text: {
        //         content: body?.email,
        //       },
        //     },
        //   ],
        // },
      },
    });
    console.log("Notion Response:", response); // 添加日志

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error:", error); // 添加日志

    return NextResponse.json({ success: false }, { status: 500 });
  }
}
