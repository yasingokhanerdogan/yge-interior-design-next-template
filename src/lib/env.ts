import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),

  NEXT_PUBLIC_DEFAULT_THEME: z.enum(["light", "dark"]).default("light"),

  NEXT_PUBLIC_GOOGLE_ANALYTICS_ID: z.string().optional(),

  NEXT_PUBLIC_RECAPTCHA_SITE_KEY: z.string().optional(),
  NEXT_PUBLIC_RECAPTCHA_SECRET_KEY: z.string().optional(),

  SMTP_SERVICE: z.string().default("gmail"),
  SMTP_HOST: z.string().default("smtp.gmail.com"),
  SMTP_PORT: z.union([z.string(), z.number()]).default("465"),
  SMTP_SECURE: z
    .string()
    .optional()
    .transform((val) => val === "true")
    .default(false),

  SMTP_USER: z.string().optional(),
  SMTP_PASS: z.string().optional(),
});

const _parsedEnv = envSchema.safeParse(process.env);

if (!_parsedEnv.success) {
  console.error("❌ Invalid environment variables:");
  console.error(_parsedEnv.error.format());
  throw new Error("Environment validation failed. Please check your .env file.");
}

const env = _parsedEnv.data;

export const envConfig = {
  NODE_ENV: env.NODE_ENV,
  IS_DEVELOPMENT: env.NODE_ENV === "development",
  IS_PRODUCTION: env.NODE_ENV === "production",

  DEFAULT_THEME: env.NEXT_PUBLIC_DEFAULT_THEME,

  GOOGLE_ANALYTICS_ID: env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || "",

  RECAPTCHA_SITE_KEY: env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
  RECAPTCHA_SECRET_KEY: env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY,

  SMTP_SERVICE: env.SMTP_SERVICE,
  SMTP_HOST: env.SMTP_HOST,
  SMTP_PORT: String(env.SMTP_PORT),
  SMTP_SECURE: env.SMTP_SECURE,
  SMTP_USER: env.SMTP_USER,
  SMTP_PASS: env.SMTP_PASS,
};
