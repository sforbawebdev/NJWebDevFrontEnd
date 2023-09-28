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
// import { loadReCaptcha } from 'react-recaptcha-v3';
import { gql } from '@apollo/client';
import Script from 'next/script';
import createApolloClient from '../graphql/apollo-client';

export async function getStaticProps() {
  const client = createApolloClient();
  const { data } = await client.query({
    query: gql`
    query GetRoutes{
      pages (where:{orderby: {field:MENU_ORDER, order:ASC}}){
        nodes {
            title
            uri
            menuOrder
            template {
              templateName
            }  
        }
      }
    }
    `,
  });

  return {
    props: {
      page_data: data?.pages?.nodes,
    },
  };
}

const App = ({page_data}) => {

  const hideLoader = () => {
    if (typeof window !== "undefined") {
      document.querySelector(".site-loader").className += " site-loader--loaded";
    }
  }
  useEffect(() => {
    // loadReCaptcha(process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY,() => {console.log("Recaptcha loaded")});
    sleep(3000).then(() => {
      hideLoader();
    });
  })


  return (
    <>
        <NextSeo
          title="New Jersey Web Developer"
          description="If you're looking for a talented and experienced New Jersey web developer, look no further! I have eight years of experience in the industry, and can help you see your project through to completion."
        />
        <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTAG}`}
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
