export const envConfig = {
  NODE_ENV: process.env.NODE_ENV,
  IS_DEVELOPMENT: process.env.NODE_ENV === "development",
  IS_PRODUCTION: process.env.NODE_ENV === "production",

  DEFAULT_THEME: process.env.NEXT_PUBLIC_DEFAULT_THEME || "light",
  SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",

  GOOGLE_ANALYTICS_ID: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || "",

  RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "sitekey",
  RECAPTCHA_SECRET_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY || "secretkey",

  SMTP_SERVICE: process.env.SMTP_SERVICE || "gmail",
  SMTP_HOST: process.env.SMTP_HOST || "smtp.gmail.com",
  SMTP_PORT: String(process.env.SMTP_PORT) || "465",
  SMTP_SECURE: process.env.SMTP_SECURE || "false",
  SMTP_USER: process.env.SMTP_USER || "",
  SMTP_PASS: process.env.SMTP_PASS || "",
};
