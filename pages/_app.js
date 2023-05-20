import Layout from '@/components/Layout'
import '@/styles/globals.css'
import unauthorized from './auth/unauthorized';
import '../i18n.js'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
export default function App({ Component, pageProps  }) {
  const isAuthorized = true; // Replace with your authentication logic
  // console.log(!isAuthorized , Component !== unauthorized)
  if (!isAuthorized && Component !== unauthorized) {
    Component = unauthorized;
  }
  // const router = useRouter
  // const {locale} = router;
  // console.log(locale ,'locale');

  // useEffect(() =>{
  //   const dir = locale ==='ar' ? 'rtl':'ltr';
  //   document.documentElement.dir = dir
  // },[locale])

  return (
    <Layout isAuthorized={isAuthorized}>
    <Component {...pageProps} />
  </Layout>
  )
}