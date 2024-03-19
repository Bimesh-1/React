import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const Box = (props) =>{
  return(
    <div>
      <p>Name: {props.name}</p>
      <p>Title: {props.title}</p>
      <p>Age: {props.age}</p>
    </div>
  )
}
const name = "Bimesh Upreti"
const first_page = 2007;

const Demo = () => {
  return(
    <div>
    <h1>Hello, my name is {name}</h1>
    <p>I have {2024 - first_page} years of building websites experiences</p>
    <Box name="Bimesh" title ="CEO" age="29"/>
    <Box name="Pratima" title ="CTO" age="20"/>
    <Box name="Oviya" title ="CFO" age="3"/>
    
  </div>
);
};
  





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Demo/>
  </React.StrictMode>,
);
