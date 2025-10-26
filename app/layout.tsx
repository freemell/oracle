import type { Metadata } from "next";
import "./globals.css";
import { SolanaProvider } from "@/components/SolanaProvider";
import '@solana/wallet-adapter-react-ui/styles.css';

export const metadata: Metadata = {
  title: "Oracle - Solana Predictions",
  description: "Predict the future. Stake your SOL. Win rewards.",
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SolanaProvider>
          {children}
        </SolanaProvider>
      </body>
    </html>
  );
}

