"use client";

import { useRef } from "react";
import { envConfig } from "@/lib/env";
import ReCAPTCHA from "react-google-recaptcha";

interface RecaptchaProps {
  onChange: (token: string | null) => void;
}

export default function Recaptcha({ onChange }: RecaptchaProps) {
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  return <ReCAPTCHA ref={recaptchaRef} sitekey={envConfig.RECAPTCHA_SITE_KEY} onChange={onChange} />;
}
