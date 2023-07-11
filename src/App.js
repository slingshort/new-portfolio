import React, { useEffect } from 'react';
import { Link, Element} from 'react-scroll';
import './App.css';
import './Animate.css';
import Header from './components/Header';
import projects from './components/ProjectList';
import ProjectCard from './components/ProjectCard';
import profile from './assets/profile-picture.jpg';

function App() {
  useEffect(() => {
    // Add scroll event listener to trigger animations
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Remove scroll event listener when component is unmounted
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Calculate the scroll position
    const scrollPosition = window.scrollY + window.innerHeight;

    // Select the elements to animate
    const elementsToAnimate = document.querySelectorAll('.animate-element');

    elementsToAnimate.forEach((element) => {
      // Check if the element is in the visible range
      if (element.offsetTop < scrollPosition) {
        // Add CSS class for animation
        element.classList.add('animate');
      }
    });
  };

  return (
    <div className='app'>
      <Header />
      <div className='scroll-container'>
        <Element name='intro' className='animate-element'>
          <div className='grid place-content-center text-8xl p-center'>
            <h1 className='text-slate-50'>SLINGSHORT.</h1>
            <h2 className='text-fuchsia-400'> Full stack web-developer</h2>
          </div>
        </Element>

        <Element name='profile' className='animate-element'>
          <div className='flex flex-row p-8'>
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
        </Element>

        <Element name='projects' className='animate-element'>
          <div className='grid place-content-center p-center'>
            <h1 className='text-slate-50 text-8xl'>Projects.</h1>
            <p className='text-fuchsia-400 text-2xl'> Here are a few projects I've worked on: </p>
            <div className="projectScroll">
              <ProjectCard projects={projects} />
            </div>
          </div>
        </Element>

        <Element name='contact' className='animate-element'>
          <div id='contact' className='grid place-content-center p-center'>
            <h1 className='text-fuchsia-400 text-8xl'>Contact me.</h1>
            <p className='text-slate-50 text-xl px-4'>
              My email is <a className='inline-link' href='mailto:salina.myat@gmail.com'>salina.myat@gmail.com</a> if you'd like to reach out! You can also find me on <a className='inline-link' href='https://www.linkedin.com/in/salina-m-a1655111b/'>Linkedin</a> if you prefer to conact me there.
            </p>
          </div>
        </Element>
      </div>
    </div>
  );
};

export default App;
