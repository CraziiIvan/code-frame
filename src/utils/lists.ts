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
  purple: {
    dark: "border-neutral-600 from-purple-950 to-neutral-950",
    light: "border-neutral-200 from-purple-50 to-purple-400",
  },
  rose: {
    dark: "border-neutral-600 from-rose-950 to-neutral-950 ",
    light: "border-neutral-200 from-rose-50 to-rose-300",
  },
  slate: {
    dark: " border-neutral-600 from-slate-800 to-slate-950 ",
    light: "border-neutral-200 from-slate-200 to-slate-300",
  },
};

export const bgStyles: TStylesList<string> = {
  pure: "bg-pure",
  coal: "from-zinc-700 to-zinc-950",
  purple: "from-purple-800 to-purple-950",
  rose: "from-rose-700 to-rose-950",
  slate: "from-slate-700  to-slate-950",
};

export const themeOptions = ["pure", "coal", "slate", "purple", "rose"];
export const themeOptionStyles = {
  pure: "bg-gradient-to-br from-neutral-50 to-neutral-300",
  coal: "bg-gradient-to-br from-neutral-200 to-neutral-950",
  slate: "bg-gradient-to-br from-slate-400 to-slate-800",
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
