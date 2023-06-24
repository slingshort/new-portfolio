import './App.css';
import Header from './components/Header';
import { motion } from "framer-motion"
import profile from './assets/profile-picture.jpg'
// import resume from "../assets/Salina_resume.pdf"

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
        <div className='grid grid-cols-3'>
          <div className='col-span-1 place-content-center p-center'>
            <img src={profile} alt='profile-pic'/>
          </div>
          <div className='grid col-span-2 place-content-center p-center'>
            <h1 className='text-fuchsia-400 text-6xl'>Hey, I'm Salina</h1>
            <p className='text-slate-50 text-2xl'> I've spent the past year developing my skills as a full-stack developer. Take a look at some of the projects I've worked on below!</p>
            <p className='text-slate-50 text-2xl'> I'm also currently working as a professional musician. In case you're interested, you can take a look at some of the work I've been involved in with <a className='inline-link' href='https://www.taikoz.com/'>Taikoz</a> or <a className='inline-link' href='https://www.drummerqueens.com/'>Drummer Queens</a> </p>
            <button className='justify-self-start px-8'>Let's connect!</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
