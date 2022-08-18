import React from 'react'
import Link from 'next/link'
import styles from '../styles/components/navbar.module.scss'


const Navbar = () => {
  return (
    <div className={styles.header}>
        <div className="container">
            <div className="row v-center space-between">
                <div className={styles.logo}>
                    <Link href="/"><a>AGENCY.</a></Link>
                </div>
                <div className={styles.nav_toggle}>
                    <div className={styles.humburger_menu} >
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar