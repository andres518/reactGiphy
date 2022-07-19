import React from 'react'
import { useEffect,useState } from 'react'
import { Cards } from '../../Layouts/Cards/Cards';
import {Input} from '../../UI/Input/Input';


export const Searche = () => {

  const url = "https://rickandmortyapi.com/api/character";

  const [pressKey,setPress] = useState(false);
  
  const [obj,setObj] = useState([]);
  
  const fKeyPress = (e) =>{
    if (e.key === 'Enter') {
      setPress(!pressKey);
    }
  }
  useEffect(() => {
    let inputAPi = document.querySelector('.inputA');
    console.log(inputAPi.value);
    customCards(inputAPi);
  }, [pressKey])

  const customCards = (inputAPi) => {
    let newURl = (url)+ `/?name= ${inputAPi.value}`;
    fetch(newURl)
    .then(response => response.json())
    .then(data => setObj(data.results))
    
  }
 
  return (

    <div className="section3">
      <h1>Rick and Morty</h1>
      <Input tp="text" textInput="Ingrese el nombre" style="inputA" event={fKeyPress} />
      <div className="tarj">
      <Cards arr={obj}></Cards>     
      </div>
    </div>
  );
}


  
