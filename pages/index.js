import { useEffect } from 'react';
import { NextSeo } from 'next-seo';
import queries from '../utilities/queries';
import sleep from "../utilities/sleep";
import Error from '../components/Error';
import Loading from '../components/Loading';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Views from "./views";
import { useQuery} from '@apollo/client';
import { loadReCaptcha } from 'react-recaptcha-v3'
import Script from 'next/script';

const App = () => {

  const hideLoader = () => {
    if (typeof window !== "undefined") {
      document.querySelector(".site-loader").className += " site-loader--loaded";
    }
  }
  useEffect(() => {
    loadReCaptcha(process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY,() => {console.log("Recaptcha loaded")});
    sleep(3000).then(() => {
      hideLoader();
    });
  })

  const ROUTE_QUERY = queries.ROUTE_QUERY();
  const { loading, error, data } = useQuery(ROUTE_QUERY);

  if(loading) {
    return (
      <Loading />
    );
  }
  if(error) {
    return (
      <Error />
    );
  }

  const page_data =  data?.pages?.nodes;

  return (
    <>
        <NextSeo
          title="Scott Forba Software Engineer"
          description="If you're looking for talented and experienced NJ web developers, look no further than Scott Forba! He has eight yers of experience in the industry, and can help you see your project through to completion."
        />
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
      <div className="app">
        <Header />
        {
          page_data && page_data.map((page, index)=> {
            const title = page.title.toLowerCase();
              return (
                <Views page={title} key={index} />
              );
          })
        }
        <Footer />
        <Navigation pages={page_data}/>
        <div id="modal-root"/>
      </div>        
    </>
  );
}

export default App;
