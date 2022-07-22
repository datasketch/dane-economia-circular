import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp ({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

MyApp.getInitialProps = async () => {
  return {}
}

export default MyApp
