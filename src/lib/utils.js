import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function validation(obj){
  if (obj.title.trim().length <6) {
    return {target: "title", message: "Sarlavha 5 harddan ko'proq bo'lishi kerak"}
  }

  return false
}