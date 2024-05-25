import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import MockWrapper from "./mocks/MockWrapper.tsx"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Auth0Wrapper } from "./auth/Auth0Wrapper/Auth0Wrapper.tsx"
import { ThemeProvider, createTheme } from "@mui/material/styles"

const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

declare module "@mui/material/styles" {
    interface Palette {
        gold: Palette["primary"]
        black: Palette["primary"]
    }

    interface PaletteOptions {
        gold?: PaletteOptions["primary"]
        black?: PaletteOptions["primary"]
    }
}

// Update the Button's color options to include an ochre option

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
})

root.render(
    <React.StrictMode>
        <Auth0Wrapper>
            <MockWrapper>
                <QueryClientProvider client={queryClient}>
                    <BrowserRouter>
                        <ThemeProvider theme={theme}>
                            <App />
                        </ThemeProvider>
                    </BrowserRouter>
                </QueryClientProvider>
            </MockWrapper>
        </Auth0Wrapper>
    </React.StrictMode>
)

//in menu aggiung ai preferiti che mette l'id del piatto nello store di redux
