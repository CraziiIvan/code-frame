import React from "react";

export type TUseOutsideClickProps = {
  dispatch: React.Dispatch<React.SetStateAction<boolean>>;
  refs: React.RefObject<HTMLElement>[];
};

export type TReducerState = {
  title: string;
  language: string;
  font: string;
  fontSize: string;
  padding: string;
  theme: "pure" | "coal" | "purple" | "rose" | "slate";
  bar: string;
  darkMode: boolean;
  radious: string;
};

export type TReducerAction = {
  type: string;
  payload: string | boolean;
};

export type TContextProps = {
  state: TReducerState;
  dispatch: React.Dispatch<TReducerAction>;
  canvasRef: React.RefObject<HTMLDivElement>;
};

export type TSwitchBtnProps = {
  state: boolean;
  id: string;
};

export type TNumberInputProps = {
  id: string;
  state: string;
};

export type TDropdownSelectProps = {
  options: string[];
  id: string;
  state: string;
};

export type TRadioTabProps = TDropdownSelectProps & {
  theme?: boolean;
};

export interface TStylesList<T> {
  [key: string]: T | TStylesList<T>;
}
