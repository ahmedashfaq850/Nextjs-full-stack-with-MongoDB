"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "./ui/use-toast";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  designation: z.string().min(1, {
    message: "Designation must be non-empty.",
  }),
});

const CommonForm = ({
  text,
  show,
  method,
  url,
  toastMessage,
  apiError,
  defaultValue,
  id
}: any) => {
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: defaultValue?.username || "",
      designation: defaultValue?.designation || "",
    },
  });

  

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);

    try {
      const apiUrl = id ? `/${id}` : '';
      const response = await fetch(url+apiUrl, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      console.log(response);
      toast({
        title: toastMessage,
        /* description: data, */
      });
      router.push("/");
      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
    } catch (err) {
      console.log(apiError, err);
    }
  }
  return (
    <div className=" w-[380px]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                {show && (
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                )}

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="designation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Designation</FormLabel>
                <FormControl>
                  <Input placeholder="Sr. Software Engineer" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {text && <Button type="submit">{text}</Button>}
        </form>
      </Form>
    </div>
  );
};

export default CommonForm;
