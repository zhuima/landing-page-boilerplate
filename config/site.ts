/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2024-06-11 19:28:15
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2024-06-12 13:51:01
 * @FilePath: /waitlist/config/site.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import { SiteConfig } from "@/types/siteConfig";
import { BsGithub, BsTwitterX } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiBuymeacoffee } from "react-icons/si";

const OPEN_SOURCE_URL = "https://github.com/zhuima";

const baseSiteConfig = {
  name: "Idol Waitlist",
  description: "咔嚓一下，和idol合影触手可及，内测即将开启.",
  url: "https://waitlist.chuhai.tools",
  ogImage: "https://waitlist.chuhai.tools/og.png",
  metadataBase: "/",
  keywords: ["Idol Waitlist", "Waitlist"],
  authors: [
    {
      name: "zhuima",
      url: "https://chuhai.tools",
      twitter: "https://twitter.com/ilovek8s",
    },
  ],
  alternates: {
    canonical: "https://waitlist.chuhai.tools",
  },
  creator: "@ilovek8s",
  // openSourceURL: "https://github.com/weijunext/landing-page-boilerplate",
  themeColors: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  nextThemeColor: "dark", // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/logo.png",
  },
  headerLinks: [
    { name: "repo", href: OPEN_SOURCE_URL, icon: BsGithub },
    {
      name: "twitter",
      href: "https://twitter.com/ilovek8s",
      icon: BsTwitterX,
    },
    {
      name: "buyMeCoffee",
      href: "https://www.buymeacoffee.com/zhuima",
      icon: SiBuymeacoffee,
    },
  ],
  footerLinks: [
    { name: "email", href: "mailto:zhuima314@gmail.com", icon: MdEmail },
    {
      name: "twitter",
      href: "https://twitter.com/ilovek8s",
      icon: BsTwitterX,
    },
    { name: "github", href: "https://github.com/zhuima/", icon: BsGithub },
    {
      name: "buyMeCoffee",
      href: "https://www.buymeacoffee.com/zhuima",
      icon: SiBuymeacoffee,
    },
    // {
    //   name: "juejin",
    //   href: "https://juejin.cn/user/26044008768029",
    //   icon: SiJuejin,
    // },
    // {
    //   name: "weChat",
    //   href: "https://weijunext.com/make-a-friend",
    //   icon: BsWechat,
    // },
  ],
  footerProducts: [
    { url: "https://chuhai.tools/", name: "Indie Hacker Tools" },
    { url: "https://seo.chuhai.tools/", name: "SEO Hacker Tools" },
    { url: "https://xiaobaot.best/", name: "小报童专栏甄选" },
    {
      url: "https://github.com/zhuima/awesome-cloudflare",
      name: "Awesome Cloudflare",
    },
  ],
};

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    site: baseSiteConfig.url,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
};
