import React from 'react'
import './about.css'
import Me from '../../assets/me_about.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experinces</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ World wide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>80+ complets</small>
            </article>
          </div>
          <p>
            Est dolor officia officia esse dolor occaecat ea sunt officia consectetur sit. Exercitation
             incididunt officia anim adipisicing excepteur id sunt commodo cupidatat aliquip deserunt. 
             Quis mollit amet consectetur velit ea officia minim duis exercitation sint nisi non. 
             Incididunt anim labore nulla voluptate elit aliquip minim sunt ea ex. 
             Reprehenderit nulla tempor fugiat tempor eu aliqua id mollit.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talks</a>

        </div>
      </div>
    </section>
  );
}

export default about