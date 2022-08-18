import Head from 'next/head'

import NavBar from '../Navbar'


const Main = ({ children }) => {

    return (
        <div className="App">
            <Head>
                <title>Next | GSAP</title>
            </Head>
        
            <NavBar />
            {children}
            
        </div>

    )
  }
  
  export default Main