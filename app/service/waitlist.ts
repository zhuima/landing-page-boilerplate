// /*
//  * @Author: zhuima zhuima314@gmail.com
//  * @Date: 2024-06-11 19:39:34
//  * @LastEditors: zhuima zhuima314@gmail.com
//  * @LastEditTime: 2024-06-11 20:24:10
//  * @FilePath: /waitlist/app/service/waitlist.ts
//  * @Description:
//  *
//  * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
//  */

// import notion from "@/lib/notionClient";

// export const addWaitlist = async (body) => {
//   const databaseId = process.env.DATABASE_ID || "DEFAULT_DATABASE_ID";
//   const response = await notion.pages.create({
//     parent: {
//       database_id: databaseId,
//     },
//     properties: {
//       Email: {
//         title: [
//           {
//             text: {
//               content: body?.email,
//             },
//           },
//         ],
//       },
//     },
//   });
// };
