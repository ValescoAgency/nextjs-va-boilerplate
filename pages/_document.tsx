import Document, { Html, Head, Main, NextScript } from 'next/document';

export default function MyDocument() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href="/fonts/ibm-plex-sans-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" key="apple" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
          key="icon16"
        />
        <link rel="shortcut icon" href="/favicon.ico" key="favicon" />
        <link rel="manifest" href="/site.webmanifest" key="webmanifest" />
      </Head>
      <body className="bg-white dark:bg-surface-dark text-gray-900 dark:text-gray-200 antialiased sm:subpixel-antialiased md:antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
