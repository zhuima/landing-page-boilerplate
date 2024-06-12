/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2024-06-11 19:28:15
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2024-06-12 16:57:40
 * @FilePath: /waitlist/next-sitemap.config.js
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || "https://waitlist.chuhai.tools",
  generateRobotsTxt: true,
  sitemapSize: 7000,
};
