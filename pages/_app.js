import "../styles/globals.css";
import "../firebaseConfig";
import Head from "next/head";
import { AuthProvider } from "../hook/auth";
import AuthStateChanged from "../components/common/authStateChanged";
import Layout from "../components/common/layout";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <AuthProvider>
        <Layout>
          <AuthStateChanged>
            <Head>
              <html lang="en" />
              <meta charset="utf-8" />
              <title>Shape the Future</title>
              <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
              />
              <meta name="theme-color" content="#000000" />
              <link rel="shortcut icon" href="/img/logo_blue.png" />

              <meta name="title" content="Shape The future" />
              <meta name="description" content="Shape the future" />
              <meta name="robots" content="index, follow" />
              <meta name="author" content="Mateo perez" />

              <meta property="og:type" content="website" />
              <meta property="og:url" content="https://swayed.io/" />
              <meta property="og:title" content="Shape The future" />
              <meta property="og:description" content="Shape The future" />
              <meta property="og:image" content="https://swayed.io/thumb.png" />

              <meta property="twitter:card" content="summary_large_image" />
              <meta property="twitter:url" content="https://swayed.io/" />
              <meta property="twitter:title" content="Shape The future" />
              <meta property="twitter:description" content="Shape The future" />
              <meta
                property="twitter:image"
                content="https://swayed.io/thumb.png"
              />

              <script
                dangerouslySetInnerHTML={{
                  __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-MQQ7B8P');`,
                }}
              ></script>

              {/* <!-- Google tag (gtag.js) --> */}
              <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-XNLDENHMZX"
              ></script>
              <script>
                {`window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments)}
    gtag('js', new Date());
  
    gtag('config', 'G-XNLDENHMZX')`}
              </script>

              <script async src="//static.getclicky.com/101383763.js"></script>
            </Head>

            <Component {...pageProps} />
          </AuthStateChanged>
        </Layout>
      </AuthProvider>
    </div>
  );
}

export default MyApp;
