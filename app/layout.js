import { Geist, Geist_Mono } from "next/font/google";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import PWAStatus from "../component/PWAStatus";
import PWAUpdater from "../component/PWAUpdater";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "LinkNest - Your Link Management Hub",
  description: "Create and manage your personal link tree with LinkNest. Share all your important links in one beautiful page.",
  keywords: "linktree, bio link, link management, social media, personal website",
  authors: [{ name: "LinkNest" }],
  creator: "LinkNest",
  publisher: "LinkNest",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "LinkNest",
    startupImage: [
      "/icons/icon-192x192.png"
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    title: "LinkNest - Your Link Management Hub",
    description: "Create and manage your personal link tree with LinkNest",
    siteName: "LinkNest",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "LinkNest"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "LinkNest - Your Link Management Hub",
    description: "Create and manage your personal link tree with LinkNest",
    images: ["/logo.png"]
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: "#8b5cf6",
  colorScheme: "dark light",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* PWA Meta Tags */}
        <meta name="application-name" content="LinkNest" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="LinkNest" />
        <meta name="description" content="Create and manage your personal link tree with LinkNest" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#8b5cf6" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#8b5cf6" />

        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" href="/icons/icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-192x192.png" />

        {/* Favicons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/icon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* Apple Splash Screens */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="apple-touch-startup-image" href="/icons/icon-512x512.png" />
        
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PWAStatus />
        <PWAUpdater />
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
