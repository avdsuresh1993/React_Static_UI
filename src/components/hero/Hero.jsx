import React from 'react'
import styles from './Hero.module.css'
import {AiOutlineSearch} from "react-icons/ai"

export const Hero=()=>{
  return (
    <>
    <div className={styles.hero}>
        <form>
            <div className={styles.text}>
             <label>where</label>
             <input type="text" placeholder='Search Location'/>
            </div>

            <div className={styles.from}>
            <label>from</label>
            <input type="date" />
            </div>

            <div className={styles.until}>
            <label>until</label>
            <input type="date" />
            </div>

            <div className={styles.search_btn}>
            <AiOutlineSearch/>
            <button>search button</button>
            </div>
        </form>

    </div>
    </>
  )
}
