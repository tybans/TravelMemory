import './App.css';
// importing react-router-dom to fix App.js file with all the routing ways of information: eg- going to addexperinece route or experiencedetails route or homepage route 
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Header from './components/UIC/Header';
import Home from './components/pages/Home'
import AddExperience from './components/pages/AddExperience';
import ExperienceDetails from './components/pages/ExperienceDetails'
import React from 'react';

function App() {

  // creating a routing component
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/addexperience',
      element: <AddExperience/>
    },
    {
      path: '/experiencedetails',
      element: <ExperienceDetails/>
    }
  ])
  return (
    <div >
      <Header/>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
