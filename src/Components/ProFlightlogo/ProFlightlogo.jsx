import React, { useState } from "react";
import styles from "./ProFlightlogo.module.css"
import previousImage from "../../Utils/previous.png"
import nextImage from "../../Utils/next.png"
import logoImage from "../../Utils/proflight_logo.png"

export default function Proflightlogo(){

    const list = [0,1,2,3]

    const [index, setIndex] = useState(0);
    const handlePrevious = ()=>{
        if(index === 0){
            setIndex(list.length-1);
            return;
        }
        setIndex(index-1);
    }
    const handleNext = ()=>{
        if(list.length-1 === index){
            setIndex(0);
            return;
        }
        setIndex(index+1);
    }
    
  return (
    <>
    <div className={styles.title}><h1>Challange ProFlight</h1></div>
    <div className={styles.container}>
        <div onClick={()=>handlePrevious()} className={styles.previous}>
            <img src={previousImage} alt="previous.img"></img>
        </div>
        {list.map((a, e)=>{
            return(
                <div
                    key={a}
                    className={index === e ? styles.active : styles.inactive}
                >
                    <img src={logoImage} alt="logo.img"></img>
                </div>
            )
        })}
        <div onClick={()=>handleNext()} className={styles.next}>
            <img src={nextImage} alt="next.img"></img>
        </div>
    </div>
    </>
  )
}