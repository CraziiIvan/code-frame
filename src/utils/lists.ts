import { TStylesList } from "../types/types";

export const fontOptions = {
  "Fira Code": '"Fira code", "Fira Mono", monospace',
  Argon: '"Argon", monospace',
  Neon: '"Neon", monospace',
  Radon: '"Radon", monospace',
  Xenon: '"Xenon", monospace',
};

export const fontSizeOptions = ["14", "16", "18", "22"];

export const editorStyles: TStylesList<string> = {
  pure: {
    dark: "border-neutral-600 from-neutral-800 to-neutral-900",
    light: "border-neutral-200 from-neutral-50 to-neutral-100",
  },
  coal: {
    dark: "border-neutral-600 from-zinc-800 to-zinc-950",
    light: "border-neutral-200 from-zinc-50 to-zinc-300",
  },
  mint: {
    dark: " border-neutral-600 from-emerald-950 to-neutral-950 ",
    light: "border-neutral-200 from-slate-200 to-slate-300",
  },
  purple: {
    dark: "border-neutral-600 from-purple-1000 to-neutral-950",
    light: "border-neutral-200 from-purple-50 to-purple-400",
  },
  rose: {
    dark: "border-neutral-600 from-rose-950 to-neutral-950 ",
    light: "border-neutral-200 from-rose-50 to-rose-300",
  },
};

export const bgStyles: TStylesList<string> = {
  pure: "bg-pure",
  coal: "from-zinc-400 to-zinc-700",
  mint: "from-emerald-400  to-emerald-600",
  purple: "from-purple-400 to-purple-600",
  rose: "from-rose-400 to-rose-600",
};

export const themeOptions = ["pure", "coal", "mint", "purple", "rose"];

export const themeOptionStyles = {
  pure: "bg-gradient-to-br from-neutral-50 to-neutral-300",
  coal: "bg-gradient-to-br from-neutral-200 to-neutral-800",
  mint: "bg-gradient-to-br from-emerald-300 to-emerald-800",
  purple: "bg-gradient-to-br from-purple-300 to-purple-800",
  rose: "bg-gradient-to-br from-rose-300 to-rose-800",
};

export const paddingOptions = ["32", "64", "80", "128"];

export const barOptions = ["Mac Os", "Window"];

export const langOptions = [
  "Javascript",
  "Typescript",
  "Python",
  "Php",
  "Java",
  "C#",
  "C++",
  "C",
];
