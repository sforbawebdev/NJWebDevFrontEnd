import '../styles/globals.scss'
import Script from 'next/script';
import {ModalProvider} from '../providers/ModalProvider.js';
import {AppProvider} from '../providers/AppProvider.js';
import { Analytics } from '@vercel/analytics/react';
import { ApolloClient, ApolloProvider, InMemoryCache,HttpLink } from '@apollo/client';
import createApolloClient from '../graphql/apollo-client';
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"

function MyApp({ Component, pageProps }) {
  const client = createApolloClient();
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTAG}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GTAG}');
        `}
      </Script>
      <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY}>
        <AppProvider>        
          <ModalProvider>
            <ApolloProvider client={client}>
              <Component {...pageProps} />
            </ApolloProvider>
          </ModalProvider>
      </AppProvider>   
    </GoogleReCaptchaProvider> 
    <Analytics />
    </>   
  );
}

export default MyApp
