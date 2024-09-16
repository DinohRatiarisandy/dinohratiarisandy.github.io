import { createContext, PropsWithChildren, useEffect, useState } from "react"

type Theme = "dark" | "light"

type ThemeProviderProps = PropsWithChildren & {
   defaultTheme?: Theme
}

// 1 - Context Creation
type ThemeProviderState = {
   theme: Theme
   setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
   theme: "dark",
   setTheme: () => {},
}

export const ThemeContextProvider =
   createContext<ThemeProviderState>(initialState)

// 2 - ContextProvider Installation
export function ThemeProvider({
   children,
   defaultTheme = "dark",
}: ThemeProviderProps) {
   const [theme, setTheme] = useState<Theme>(defaultTheme)

   useEffect(() => {
      const root = window.document.documentElement
      root.classList.remove("dark", "light")
      root.classList.add(theme)
   }, [theme])

   const value = {
      theme,
      setTheme,
   }

   return (
      <ThemeContextProvider.Provider value={value}>
         {children}
      </ThemeContextProvider.Provider>
   )
}
