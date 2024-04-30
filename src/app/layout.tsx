import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { themeOptions } from "@/lib/utils/Theme";
import CssBaseline from "@mui/material/CssBaseline";
import AppBarLayout from "@/lib/components/layout/appBarLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ark Multi Manager",
  description: "Barebones critter manager for Ark",
};

function RootLayout(props): JSX.Element {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={`${inter.className}`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={themeOptions}>
            <CssBaseline />
            <main className="min-h-screen py-2">
              <AppBarLayout>{props.children}</AppBarLayout>
            </main>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: Array<JSX.Element>,
};

export default RootLayout;
