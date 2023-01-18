import React from 'react'
import style from '../Subscribe/Subscribe.module.css'

const ContactDetails = () => {
  return (
    <section>
        <div className='container'>
            <div className={style.mainContactSection}>
               <h1>Subscribe Our Newsletter</h1>
               <form>
                <input type='name' placeholder='Name:'></input>
                <input type='email' placeholder='Enter Your Email'></input>
                <button type='button'>SEND</button>
               </form>
            </div>
        </div>
    </section>
  )
}

export default ContactDetails