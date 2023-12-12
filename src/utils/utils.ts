import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...input: ClassValue[]) {
    return twMerge(clsx(input))
}

export function capitalizeAndAddSpace(str: string): string {
    const words = str.split(/(?=[A-Z])/);
    
    const capitalizedStr = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    
    return capitalizedStr;
  }