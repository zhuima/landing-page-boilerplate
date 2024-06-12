/*
 * @Author: zhuima zhuima314@gmail.com
 * @Date: 2024-06-11 19:28:15
 * @LastEditors: zhuima zhuima314@gmail.com
 * @LastEditTime: 2024-06-12 13:33:13
 * @FilePath: /waitlist/components/home/CTAButton.tsx
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

import confetti from "canvas-confetti";

const ConfettiAction = () => {
  // copy and paste https://www.kirilv.com/canvas-confetti/
  // confetti({
  //   particleCount: 100,
  //   spread: 70,
  //   origin: { y: 0.6 },
  // });
  var count = 200;
  var defaults = {
    origin: { y: 0.7 },
  };

  function fire(particleRatio: number, opts: any) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
};

// Define your form schema using Zod
const FormSchema = z.object({
  email: z.string().email(),
});

type FormSchemaType = z.infer<typeof FormSchema>;

const CTAButton = ({ locale }: { locale: any }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = async (data: FormSchemaType) => {
    console.log("------>email", data.email);
    try {
      await axios.post("/api/notion/waitlist", {
        email: data.email,
      });

      reset();
      // toast.success("Welcome 🎊， Successfully created!");
      ConfettiAction();
    } catch (error) {
      toast.error("This is an error!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative mx-auto mb-4 flex w-full max-w-2xl flex-col items-start justify-center sm:flex-row"
    >
      <input
        type="email"
        {...register("email")}
        placeholder={locale.title}
        className="mb-3 mr-6 block h-9 w-full border border-blue-500 bg-white dark:bg-gray-800 px-6 py-7 text-sm text-[#333333] dark:text-gray-200 focus:border-[#3898ec] dark:focus:border-blue-500 focus:outline-none transition-colors duration-200"
        required
      />
      {errors.email && (
        <span className="text-red-500">Invalid email address</span>
      )}
      <input
        type="submit"
        value={locale.button}
        className="inline-block cursor-pointer bg-[#276ef1] dark:bg-blue-700 px-6 py-3 text-center font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]"
        aria-label="Submit Email"
      />
    </form>
  );
};

export default CTAButton;
