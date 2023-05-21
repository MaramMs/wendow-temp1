import Layout from '@/components/Layout'
import '@/styles/globals.css'
import unauthorized from './auth/unauthorized';
import '../i18n.js'

import { appWithTranslation } from 'next-i18next';
 function App({ Component, pageProps  }) {
  const isAuthorized = true; 
  if (!isAuthorized && Component !== unauthorized) {
    Component = unauthorized;
  }

  return (
    <Layout isAuthorized={isAuthorized}>
    <Component {...pageProps} />
  </Layout>
  )
}

export default appWithTranslation(App)