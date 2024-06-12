/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2024-06-11 19:28:15
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2024-06-12 12:11:25
 * @FilePath: /waitlist/components/home/CTA.tsx
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
/* eslint-disable react/no-unescaped-entities */
import CTAButton from "@/components/home/CTAButton";
import { RoughNotation } from "react-rough-notation";

const CTA = ({ locale, CTALocale }: { locale: any; CTALocale: any }) => {
  return (
    <section className="flex flex-col justify-center max-w-[88%] items-center py-16 gap-12">
      <div className="flex flex-col text-center gap-4">
        <h2 className="text-center">{locale.title}</h2>
        <p className="text-large text-default-500">
          <RoughNotation type="box" color="#b71c1c" show={true}>
            {locale.description1}
          </RoughNotation>{" "}
          {locale.description2}{" "}
          <RoughNotation type="box" color="#b71c1c" show={true}>
            {locale.description3}
          </RoughNotation>{" "}
          {locale.description4}{" "}
          <RoughNotation type="box" color="#b71c1c" show={true}>
            {locale.description5}
          </RoughNotation>
          {locale.description6}
        </p>
      </div>
      <CTAButton locale={CTALocale} />
    </section>
  );
};

export default CTA;
