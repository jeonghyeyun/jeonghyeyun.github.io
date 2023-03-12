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
      <Route path='/' element={<Home />}/>
      <Route path='/contact' element={<Contact />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/interests' element={<Interests />} />
      <Route path='/Project1' element={<Project1 />} />
      <Route path='/Project2' element={<Project2 />} />
      <Route path='/Project3' element={<Project3 />} />
      <Route path='/Photo' element={<Photo />} />
      <Route path='/Music' element={<Music />} />
      <Route path='/Food' element={<Food />} />
      <Route path='/Art' element={<Art />} />
    </Routes>
    </>
  );
}

export default App;