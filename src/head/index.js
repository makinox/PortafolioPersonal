import Head from 'next/head'
export default () => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="theme-color" content="#000000"></meta>
      <title>Jesús Bossa | Ingeniero de software</title>

      <meta name="robots" content="index, follow" />
      <meta name="robots" href="./static/robots.txt" />
      <meta name="revisit-after" content="3 days" />

      <meta name="keywords" content="desarrollo, software, react, app, aplicaciones, moviles, android, iphone, ipad, windows, redux, construccion, arquitectura de software, ingeniero de software" />

      <meta name="author" content="Jesús Bossa" />
      <link rel="shortcut icon" href="./static/navbar/logo.ico" />
      <meta name="description" content="Jesús david bossa. Ingeniero de software especializado en frontend" />
    </Head>
    <style jsx global>{`
        * {
            margin: 0
          }

        body {
            font-family: system-ui;
            min-height: 100%;
        }
    `}</style>
  </>
)