import { redirect } from "next/navigation";
import { paths } from "@/lib/routes";

export default function NotFound() {
  redirect(paths.ERRORS.NOT_FOUND);
}
