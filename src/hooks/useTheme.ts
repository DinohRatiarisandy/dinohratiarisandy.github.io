import { useContext } from "react"
import { ThemeContextProvider } from "../provider/ThemeProvider"

export function useTheme() {
   return useContext(ThemeContextProvider)
}
