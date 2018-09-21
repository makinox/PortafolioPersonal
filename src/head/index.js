import Head from 'next/head'
export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>Jesús Bossa | Ingeniero de software</title>
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
  </div>
)