import React from 'react'
import './styles/Section.scss'
import man2 from './assets/suundeep2.png'

const Section = () => {
    return (
        <div className='section'>


            <div className="section__container">


                <div className="section__img">
                    <img src={man2} alt="" />
                </div>


                <div className="section__content">
                    <h1>Who is Ashutosh kumar</h1>
                    <p>Student of Lovely Professional Uninversity</p>
                    <p>Learning Full Stack Devolopment</p>
                    <p>Exploring UI & UX Designes</p>
                    <p>Good knowledge of C++ & Javascript</p>
                    <p>Problem Solver</p>
                    <p>Willing to learn new technologies</p>
                </div>



            </div>


        </div>
    )
}

export default Section
