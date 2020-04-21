import React from 'react'
import styles from './instruction.css'
import { Link } from 'react-router-dom'
const Instruction =()=>{
    const shoot = {
        
    }
    return (
        <div className={styles.word}>
                <h2 className={styles.center}>INSTRUCTIONS !!! </h2>
               
                <ul className={styles.list}>
                    <li> 
                    Delectus maiores molestias ullam mollitia.  
                    </li>
                    <li> 
                        Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </li>
                    <li>
                        Eaque aliquid dolor et odio cumque.
                    </li>
                    <li>
                    repudiandae consequuntur dignissimos reiciendis.
                    </li>
                    <li>
                    nihil officia at recusandae vitae deserunt harum.
                    </li>
                </ul>
                <div className={styles.center}>
                    <button onClick={shoot} className={styles.right}>
                        <Link to ="/sign-in" className={styles.start}>
                            Start Exam
                        </Link>    
                    </button>
                    
                </div>
        </div>
    )
}
export default Instruction;