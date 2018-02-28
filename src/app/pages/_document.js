import Document, { Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    return { html, head, errorHtml, chunks }
  }

  render() {
    return (
      <html>
        <Head>
          <title>Next.js on Firebase Hosting</title>
          <meta charset='utf-8' />
          <script defer src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>
        </Head>
        <body style={{backgroundColor: '#F9FBFD', fontFamily: 'Roboto'}}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
