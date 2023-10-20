import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocumment extends Document {
  render() {
    return (
      <Html>
        <Head></Head>
        <body className="min-h-screen bg-background font-sans antialiased">
          <main>
            <Main />
            <NextScript />
          </main>
        </body>
      </Html>
    )
  }
}
