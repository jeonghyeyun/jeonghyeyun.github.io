import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Contact from './routes/Contact'
import Projects from './routes/Projects'
import Interests from './routes/Interests'
import Project1 from './components/projects/Project1';
import Project2 from './components/projects/Project2';
import Project3 from './components/projects/Project3';
import Photo from './routes/Photo';
import Music from './routes/Music';
import Food from './routes/Food';
import Art from './routes/Art';

function App() {
  return (
    <>
    <Routes>
      <Route path='/jeonghyeyun.github.io' exact component={<Home />}/>
      <Route path='/jeonghyeyun.github.io/contact' exact component={<Contact />} />
      <Route path='/jeonghyeyun.github.io/projects' exact component={<Projects />} />
      <Route path='/jeonghyeyun.github.io/interests' exact component={<Interests />} />
      <Route path='/jeonghyeyun.github.io/Project1' exact component={<Project1 />} />
      <Route path='/jeonghyeyun.github.io/Project2' exact component={<Project2 />} />
      <Route path='/jeonghyeyun.github.io/Project3' exact component={<Project3 />} />
      <Route path='/jeonghyeyun.github.io/Photo' exact component={<Photo />} />
      <Route path='/jeonghyeyun.github.io/Music' exact component={<Music />} />
      <Route path='/jeonghyeyun.github.io/Food' exact component={<Food />} />
      <Route path='/jeonghyeyun.github.io/Art' exact component={<Art />} />
    </Routes>
    </>
  );
}

export default App;