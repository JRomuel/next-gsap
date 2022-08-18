
import { useEffect } from "react";

import gsap from "gsap";

import Layout from '../components/layouts/main'
import '../styles/app.scss'


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    gsap.to("body", 0, { css: { visibility: 'visible'} });  
  })
  
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
