import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function convertToSlug(text: string): string {
  const charMap: Record<string, string> = {
    ç: "c",
    Ç: "c",
    ğ: "g",
    Ğ: "g",
    ı: "i",
    İ: "i",
    ö: "o",
    Ö: "o",
    ş: "s",
    Ş: "s",
    ü: "u",
    Ü: "u",
  };

  const normalized = text
    .split("")
    .map((char) => charMap[char] || char)
    .join("");

  return normalized
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function urlBuilder(
  basePath: string,
  pathParams: (string | number)[] = [],
  queryParams?: Record<string, string | number | boolean | undefined | null>,
): string {
  let url = [basePath, ...pathParams].join("/");

  if (queryParams) {
    const searchParams = new URLSearchParams();

    Object.entries(queryParams).forEach(([key, value]) => {
      const isValid = value !== undefined && value !== null && value !== "";

      if (isValid) {
        searchParams.append(key, String(value));
      }
    });

    const queryString = searchParams.toString();
    if (queryString) {
      url += `?${queryString}`;
    }
  }

  return url;
}
