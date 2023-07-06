import React from 'react';
import './App.css';
import Header from './components/Header';
import projects from './components/ProjectList';
import ProjectCard from './components/ProjectCard';
import { motion } from "framer-motion";
import profile from './assets/profile-picture.jpg';
import { BiMailSend } from "react-icons/bi";
 

function App() {

  return (
    <div className='app'>
      <Header />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}>
        <div className='grid place-content-center text-8xl p-center'>
          <h1 className='text-slate-50'>SLINGSHORT.</h1>
          <h2 className='text-fuchsia-400'> Full stack web-developer</h2>
        </div>

        <div className='flex flex-row'>
          <div className='profile-pic'>
            <img src={profile} alt='profile-pic' />
          </div>
          <div className='place-content-center p-4'>
            <h1 className='text-fuchsia-400 text-6xl'>Hey, I'm Salina</h1>
            <p className='text-slate-50 text-xl'> I've spent the past year developing my skills as a full-stack developer. Take a look at some of the projects I've worked on below!</p>
            <p className='text-slate-50 text-xl'> I'm also currently working as a professional musician. In case you're interested, you can take a look at some of the work I've been involved in with <a className='inline-link' href='https://www.taikoz.com/'>Taikoz</a> or <a className='inline-link' href='https://www.drummerqueens.com/'>Drummer Queens</a>.</p>
            <button className='justify-self-start px-8 my-1 text-xl'><a href='#contact'>Let's connect!</a></button>
          </div>
        </div>

        <div className='grid place-content-center p-center'>
          <h1 className='text-slate-50 text-8xl'>Projects.</h1>
          <p className='text-fuchsia-400 text-2xl'> Here are a few projects I've worked on: </p>
          <div className="projectScroll">
            <ProjectCard projects={projects} />
          </div>
        </div>

        <div id='contact' className='grid place-content-center p-center'>
          <h1 className='text-fuchsia-400 text-8xl'>Contact me.</h1>
          {/* <p className='text-slate-50 text-xl'>Here's my email if you'd like to reach out! You can also find me on <a className='inline-link' href='https://www.linkedin.com/in/salina-m-a1655111b/'>Linkedin</a> if you prefer to conact me there.</p> */}
          <form className='grid grid-cols-3'>
            <div className='col-span-1 bg-fuchsia-400 m-2 rounded text-black text-xl pt-4'>
              <p>Please feel free to send me an email via this form. </p>
              <p>Otherwise, you can reach out via <a className='inline-link2' href='https://www.linkedin.com/in/salina-m-a1655111b/'>Linkedin</a> if that's your preferred method of communication.</p>
            </div>
            <div className='col-span-2 m-2'>
              <div className='inline-flex'>
                <p className='text-slate-50 text-xl'>Name:</p>
                <input className='formInput'/>
              </div>
              <div className='inline-flex'>
                <p className='text-slate-50 text-xl'>Email:</p>
                <input className='formInput'/>
              </div>
              <div>
                <p className='text-slate-50 text-xl'>Message:</p>
                <input className='formInput h-48'/>
              </div>
              <button className='mailSend'><BiMailSend /></button>
            </div>
          </form>
          {/* <p className='text-fuchsia-400 text-xl px-2'><a className='inline-link' href='mailto:salina.myat@gmail.com'><span><BiMailSend /></span>salina.myat@gmail.com</a></p> */}
        </div>

      </motion.div>
    </div>
  );
}

export default App;
