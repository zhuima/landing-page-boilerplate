/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2024-06-11 19:28:15
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2024-06-12 13:55:17
 * @FilePath: /waitlist/types/siteConfig.ts
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import { IconType } from "react-icons";

export type AuthorsConfig = {
  name: string;
  url: string;
  twitter?: string;
};
export type ProductLink = {
  url: string;
  name: string;
};
export type Link = {
  name: string;
  href: string;
  icon: IconType;
};
export type ThemeColor = {
  media: string;
  color: string;
};
export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  keywords: string[];
  authors: AuthorsConfig[];
  creator: string;
  openSourceURL?: string;
  ogImage: string;
  headerLinks: Link[];
  footerLinks: Link[];
  footerProducts: ProductLink[];
  metadataBase: URL | string;
  themeColors?: string | ThemeColor[];
  nextThemeColor?: string;
  alternates: {
    canonical: string;
  };
  icons: {
    icon: string;
    shortcut?: string;
    apple?: string;
  };
  openGraph: {
    type: string;
    locale: string;
    url: string;
    title: string;
    description: string;
    siteName: string;
    images?: string[];
  };
  twitter: {
    card: string;
    title: string;
    site: string;
    description: string;
    images?: string[];
    creator: string;
  };
};
