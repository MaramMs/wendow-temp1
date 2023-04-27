import Layout from '@/components/Layout'
import '@/styles/globals.css'
import unauthorized from './auth/unauthorized';
export default function App({ Component, pageProps  }) {
  const isAuthorized = true; // Replace with your authentication logic
  // console.log(!isAuthorized , Component !== unauthorized)
  if (!isAuthorized && Component !== unauthorized) {
    Component = unauthorized;
  }

  return (
    <Layout isAuthorized={isAuthorized}>
    <Component {...pageProps} />
  </Layout>
  )
}