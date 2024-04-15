import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import HomePage from './HomePage';
import Dog from './Dog';
import whiskey from './imgs/whiskey.jpg'
import tubby from './imgs/tubby.jpg'
import hazel from './imgs/hazel.jpg'
import NotFoundPage from './NotFoundPage';
const dogs = [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Hazel",
      age: 3,
      src: hazel,
      facts: [
        "Hazel has soooo much energy!",
        "Hazel is highly intelligent.",
        "Hazel loves people more than dogs."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is not the brightest dog",
        "Tubby does not like walks or exercise.",
        "Tubby loves eating food."
      ]
    }
  ]

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/dogs" element={<App dogs={dogs}/>} >
      <Route index element={<HomePage dogs={dogs}/>} />
      {dogs.map( dog => <Route path={dog.name} element={<Dog {...dog}/>}/> )}
      <Route path="*" element={<HomePage dogs={dogs} />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
