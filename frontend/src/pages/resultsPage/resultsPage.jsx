import React, {useState, useRef} from "react";
import Results from "../../components /results /results";
import styles from "./mainPage.module.css";


const MainPage = (props) => {
    
   
    return(
    <section className = {styles.whole_wrapper}>
    <div>
        <h1 className = {styles.title}>Spot the Stick Insect</h1>
        <div>
        <h4>Thank you for participating!</h4>
        <h5>You spotted 18 stick instects out of 20,<br /> in an average time of 9.68 seconds!</h5>
            
        </div>
        <div>
            <p>If you would like to be notified of the outcome of this research, please leave <br /> your email address below. If you choose to supply your email address, <br />we will not for any other purpose, nor will we supply it to any third party. </p>
            
        </div>
        <div>
            <label> Email: </label>
            <input type="text" />
            <button className={styles.email_btn} > Submit</button>
            
        </div>
        <br/>
        <div className = {styles.button_wrapper}>
           
            <button className={styles.play_btn} > Try Again! </button>

        </div>
    </div>
    </section>
    );

}

export default ResultsPage;
