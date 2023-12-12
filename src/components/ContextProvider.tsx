import { TContextProps, TReducerAction, TReducerState } from '../types/types.ts'
import React, { createContext, useReducer, useRef } from 'react'
 
export const OptionsContext = createContext<TContextProps | null>(null)

const initialValue: TReducerState = {
  title: "Untitled",
  language: "Javascript",
  font: "Fira Code",
  fontSize: "16",
  padding: "32",
  theme: "pure",
  bar: "Mac Os",
  darkMode: true,
  radious: "20",
}

const reducer = (state: TReducerState, action: TReducerAction): TReducerState => {
  const { type, payload } = action
  return { ...state, [type]: payload}
}
 
export default function ContextProvider({ children } : { children: React.ReactNode }) {

  const canvasRef = useRef<HTMLDivElement>(null);

  const [state, dispatch] = useReducer(reducer, initialValue)

  return <OptionsContext.Provider value={{state, dispatch, canvasRef}}>{children}</OptionsContext.Provider>
}
