import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9LHQF8WF12"
        ></script>
        <script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || []; 
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date()); 

          gtag('config', 'G-9LHQF8WF12');
      `,
          }}
        /> */}
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
