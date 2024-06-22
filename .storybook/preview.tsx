import { StrictMode, Suspense } from 'react'
import type { Preview } from "@storybook/react"
import "../src/index.css"
import { ThemeProvider, createTheme } from "@mui/material/styles"

export const theme = createTheme({
    palette: {
        gold: {
            main: "gold",
            contrastText: "black"
        },
        black: {
            main: "#000",
            contrastText: "gold"
        }
    }
    } as any)

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    },
    decorators: [
        (Story) => (
            <StrictMode>
             <ThemeProvider theme={theme}>
                <Suspense fallback={null}>
                    <Story />   
                </Suspense>
             </ThemeProvider>
            </StrictMode>
        )
    ]
}



export default preview
