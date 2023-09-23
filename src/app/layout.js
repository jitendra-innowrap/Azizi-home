import Script from 'next/script'
import GoogleAnalytics from './GoogleAnalytics'
import './globals.css'
import { Inter } from 'next/font/google'
const GA_TRACKING_ID = process.env.GA_TRACKING_ID
const GTM_ID = process.env.GTM_ID

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Azizi - Venice',
  description: 'Azizi Launching Soon',
  openGraph: {
    images: ['/OG-Image.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
          <GoogleAnalytics GA_TRACKING_ID={GA_TRACKING_ID} />
          {/* Google Tag Manager  */}
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
            `}
          </Script>
          {/* End Google Tag Manager  */}
      </head>
      <body>
        {children}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
          }}
        />
      </body>
    </html>
  )
}
