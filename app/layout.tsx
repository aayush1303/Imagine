import type { Metadata } from "next";
import { useState } from "react";
import { IBM_Plex_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  ClerkProvider,
  SignIn,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useAuth
} from '@clerk/nextjs'
import "./globals.css";

const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex'
});

export const metadata: Metadata = {
  title: "Imaginify",
  description: "AI-powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    
  return (
<ClerkProvider  appearance={{
      variables: { colorPrimary: '#624cf5' }
    }}>
      <html lang="en">
        <body className={cn("font-IBMPlex antialiased", IBMPlex.variable,"flex items-center justify-center ")}>
            {/* <SignedIn>
              <UserButton showName />
            </SignedIn> */}
            <SignedOut>
              <SignIn routing="hash" />
            </SignedOut>
          <SignedIn>
            {children}
          </SignedIn>
          <SignedOut>
          </SignedOut>
        </body>
      </html>
    </ClerkProvider>
  );
}