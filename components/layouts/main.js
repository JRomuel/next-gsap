import Head from 'next/head'

import NavBar from '../navbar'


const Main = ({ children }) => {

    return (
        <div className="App">
            <Head>
                <title>Next | GSAP</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:400,600,700&display=swap" rel="stylesheet"/>
            </Head>
        
            <NavBar />
            {children}
            
        </div>

    )
  }
  
  export default Main