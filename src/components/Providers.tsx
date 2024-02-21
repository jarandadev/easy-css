'use client'

import { ThemeProvider } from "next-themes";
import { Background } from "./Background";

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Background />
      {children}
    </ThemeProvider>
  )
}
