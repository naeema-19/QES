import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <title>Qurum Enterprise Oil & Gas Services L.L.C</title>
      <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="" name="keywords" />
        <meta content="" name="description" />
       <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* Google Web Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter:slnt,wght@-10..0,100..900&display=swap"
          rel="stylesheet"
        />
        {/* Icon Font Stylesheet */}
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />
        {/* Libraries Stylesheet */}
        <link rel="stylesheet" href="assets/lib/animate/animate.min.css" />
        <link href="assets/lib/lightbox/css/lightbox.min.css" rel="stylesheet" />
        <link
          href="assets/lib/owlcarousel/assets/owl.carousel.min.css"
          rel="stylesheet"
        />
        {/* Customized Bootstrap Stylesheet */}
        <link href="assets/css/bootstrap.min.css" rel="stylesheet" />
        {/* Template Stylesheet */}
        <link href="assets/css/style.css" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
