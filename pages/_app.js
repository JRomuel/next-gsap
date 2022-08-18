import '../styles/components/app.scss'
import { useEffect } from "react";
import gsap from "gsap";


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    gsap.to("body", 0, { css: { visibility: 'visible'} });  
  })
  
  return <Component {...pageProps} />
}

export default MyApp
