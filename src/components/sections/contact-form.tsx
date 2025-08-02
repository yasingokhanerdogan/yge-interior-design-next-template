"use client";

import { useState } from "react";
import { envConfig } from "@/lib/env";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import Recaptcha from "@/components/blocks/recaptcha";

import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  message: z.string().min(1, { message: "Message is required" }),
});

type ContactFormSchema = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [captcha, setCaptcha] = useState<string | null>(null);

  const form = useForm<ContactFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function sendEmail(data: any) {
    const response = await fetch(`${envConfig.SITE_URL}/api/send-email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  async function onSubmit(data: ContactFormSchema) {
    if (!captcha) return alert("Please verify the reCAPTCHA.");
    const response = await sendEmail(data);

    if (response.info) {
      toast.success("Email sent successfully");
    } else {
      toast.error("Failed to send email");
    }
    form.reset();
  }

  return (
    <div className="flex flex-col gap-2">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <div className="grid grid-cols-2 gap-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormMessage />
                  <Input placeholder="Name" disabled={form.formState.isSubmitting} {...field} />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormMessage />
                  <Input placeholder="Email" disabled={form.formState.isSubmitting} {...field} />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormMessage />
                <Input placeholder="Subject" disabled={form.formState.isSubmitting} {...field} />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormMessage />
                <Input placeholder="Message" disabled={form.formState.isSubmitting} {...field} />
              </FormItem>
            )}
          />
          <Recaptcha onChange={setCaptcha} />
          <Button className="rounded-none" size="lg" type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Sending..." : "Send"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
