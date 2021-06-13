import React from 'react' //main react package for creating react componenets and using 35x
import ReactDom from 'react-dom' //package for rendering and manipulating the DOM
import App from './App.js' //our root component that will hold all other components



ReactDom.render(<App />,document.getElementById("root"))