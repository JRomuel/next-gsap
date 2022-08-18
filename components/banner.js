import React from 'react'
import styles from '../styles/components/banner.module.scss'


const Banner = () => {
  return (
    <section className={styles.main}>
        <div className="container">
            <div className={`${styles.row} row`}>
                <h2>
                    <div className={`${styles.line} line`}>
                        <span>Creating unique brands</span>
                    </div>
                    <div className={`${styles.line} line`}>
                        <span>is what we do.</span>
                    </div>
                </h2>
            </div>
        </div>
    </section>
  )
}

export default Banner