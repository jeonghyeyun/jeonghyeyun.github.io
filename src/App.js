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
      <Route path='/jeonghyeyun.github.io' element={<Home />}/>
      <Route path='/jeonghyeyun.github.io/contact' element={<Contact />} />
      <Route path='/jeonghyeyun.github.io/projects' element={<Projects />} />
      <Route path='/jeonghyeyun.github.io/interests' element={<Interests />} />
      <Route path='/jeonghyeyun.github.io/Project1' element={<Project1 />} />
      <Route path='/jeonghyeyun.github.io/Project2' element={<Project2 />} />
      <Route path='/jeonghyeyun.github.io/Project3' element={<Project3 />} />
      <Route path='/jeonghyeyun.github.io/Photo' element={<Photo />} />
      <Route path='/jeonghyeyun.github.io/Music' element={<Music />} />
      <Route path='/jeonghyeyun.github.io/Food' element={<Food />} />
      <Route path='/jeonghyeyun.github.io/Art' element={<Art />} />
    </Routes>
    </>
  );
}

export default App;