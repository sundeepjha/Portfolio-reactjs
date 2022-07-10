import { Facebook, GitHub, Instagram, LinkedIn, MenuBook, Pinterest, SettingsPowerRounded, Twitter } from '@material-ui/icons'
import React, { useState } from 'react'
import './styles/Main.scss'
import man from './assets/sundeep.png'

const Main = () => {
    return (
        <div className='main'>
            <div className='main__container'>


                <div className="main__content">

                    <div className="text">
                            <p>Hey There !</p>
                            <h1>I am Ashutosh Kumar</h1>
                            <p>Computer Science Student</p>

                            <div className="icons">
                            <a href="https://www.linkedin.com/in/ashutosh-kumar-1314441bb/"><LinkedIn className='icon'/></a>
                            <a href="https://github.com/sundeepjha"><GitHub className='icon'/></a>
                            <a href="https://www.instagram.com/sundeepjha098/"><Instagram className='icon'/></a>
                            <a href="https://twitter.com/Sundeepjha"> <Twitter className='icon'/></a>
                            <a href="https://facebook.com"><Facebook className='icon'/></a>
                            </div>


                    <div className="buttons">
                        <button>See My Work</button>
                        <button>Hire Me</button>
                    </div>

                    </div>


                </div>


                <div className="main__img">
                    <img src={man} alt="" />
                </div>


            </div>



        </div>
    )
}


export default Main
