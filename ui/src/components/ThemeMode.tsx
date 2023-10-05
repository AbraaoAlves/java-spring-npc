import { useMediaQuery, ThemeProvider, createTheme } from "@mui/material";
import React from "react";

type Props = {
    children: React.ReactNode;
}
export function ThemeMode({ children }: Props) {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode],
    );
    
    return (<ThemeProvider theme={theme}>{children}</ThemeProvider>);
}