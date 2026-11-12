"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, CheckCircle2, Loader2, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/lib/site";

const contactSchema = z.object({
  firstName: z.string().trim().min(1, "Please enter your first name.").max(60),
  lastName: z.string().trim().min(1, "Please enter your last name.").max(60),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a phone number.")
    .max(24, "Please keep the phone number shorter.")
    .regex(
      /^[0-9()#&+*\-=.\s]+$/,
      "Only numbers and phone characters are accepted.",
    ),
  message: z
    .string()
    .trim()
    .min(10, "Please share a few words about how we can help.")
    .max(2000, "Please keep your message under 2,000 characters."),
});

type ContactValues = z.infer<typeof contactSchema>;

type FormState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success" }
  | { status: "error"; message: string };

export function ContactForm() {
  const [formState, setFormState] = React.useState<FormState>({ status: "idle" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactValues) {
    setFormState({ status: "submitting" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Your message could not be sent.");
      }

      setFormState({ status: "success" });
      reset();
    } catch {
      setFormState({
        status: "error",
        message:
          "Something went wrong. Please call us instead — we are happy to help.",
      });
    }
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {formState.status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex min-h-[30rem] flex-col items-start justify-center rounded-3xl border border-sky/25 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 backdrop-blur-xl md:p-12"
            role="status"
            aria-live="polite"
          >
            <span className="grid size-14 place-items-center rounded-full border border-sky/40 bg-sky/10">
              <CheckCircle2 className="size-7 text-sky" />
            </span>
            <h3 className="mt-7 font-display text-4xl text-porcelain">
              Thank you.
            </h3>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-mist/75">
              Your message is with our team. We will follow up during office
              hours. If you need us sooner, please call — a real person will
              answer.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="outline">
                <a href={site.phoneHref}>
                  <Phone className="size-4 text-sky" />
                  {site.phoneDisplay}
                </a>
              </Button>
              <Button
                variant="ghost"
                onClick={() => setFormState({ status: "idle" })}
              >
                Send another message
                <ArrowUpRight className="size-4" />
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="grid gap-x-6 gap-y-7 sm:grid-cols-2"
          >
            <div className="flex flex-col gap-2">
              <Label htmlFor="firstName">First name</Label>
              <Input
                id="firstName"
                placeholder="First name"
                autoComplete="given-name"
                aria-invalid={Boolean(errors.firstName)}
                aria-describedby={
                  errors.firstName ? "firstName-error" : undefined
                }
                {...register("firstName")}
              />
              {errors.firstName && (
                <p
                  id="firstName-error"
                  className="text-[11px] text-red-300"
                  role="alert"
                >
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="lastName">Last name</Label>
              <Input
                id="lastName"
                placeholder="Last name"
                autoComplete="family-name"
                aria-invalid={Boolean(errors.lastName)}
                aria-describedby={
                  errors.lastName ? "lastName-error" : undefined
                }
                {...register("lastName")}
              />
              {errors.lastName && (
                <p
                  id="lastName-error"
                  className="text-[11px] text-red-300"
                  role="alert"
                >
                  {errors.lastName.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                {...register("email")}
              />
              {errors.email && (
                <p
                  id="email-error"
                  className="text-[11px] text-red-300"
                  role="alert"
                >
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="phone">Phone number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(701) 000-0000"
                autoComplete="tel"
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                {...register("phone")}
              />
              {errors.phone && (
                <p
                  id="phone-error"
                  className="text-[11px] text-red-300"
                  role="alert"
                >
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2 sm:col-span-2">
              <Label htmlFor="message">Your message</Label>
              <Textarea
                id="message"
                placeholder="Tell us a little about how we can help."
                rows={4}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                {...register("message")}
              />
              {errors.message && (
                <p
                  id="message-error"
                  className="text-[11px] text-red-300"
                  role="alert"
                >
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xs text-[11px] leading-relaxed text-mist/75">
                By submitting, you agree to be contacted about your request.
                Please do not include sensitive medical information.
              </p>
              <Button
                type="submit"
                size="lg"
                disabled={formState.status === "submitting"}
                className="w-full sm:w-auto"
              >
                {formState.status === "submitting" ? (
                  <>
                    Sending
                    <Loader2 className="size-4 animate-spin" />
                  </>
                ) : (
                  <>
                    Submit
                    <ArrowUpRight className="size-4" />
                  </>
                )}
              </Button>
            </div>

            {formState.status === "error" && (
              <p
                className="rounded-2xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-[12px] text-red-200 sm:col-span-2"
                role="alert"
              >
                {formState.message}
              </p>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
