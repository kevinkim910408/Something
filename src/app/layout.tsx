import { Layout } from "./_layout.component/Layout";
import "./_style/global.css";
import { ThemeProvider, RecoilRootProvider } from "@/providers";
import { Metadata } from "next";
import "tailwindcss/tailwind.css";

export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: {
    absolute: "",
    default: "Next Template",
    template: "",
  },
  description: "Next Template.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#fff" />
      <meta name="msapplication-TileColor" content="#FF98BA" />
      <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      <body>
        <RecoilRootProvider>
          <ThemeProvider
            attribute="class"
            enableSystem
            defaultTheme="dark"
            disableTransitionOnChange
          >
            <Layout>{children}</Layout>
          </ThemeProvider>
        </RecoilRootProvider>
      </body>
    </html>
  );
}
