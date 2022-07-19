import React, { useState,useEffect } from 'react'
import { CardsTenor } from '../../Layouts/Cards/CardsTenor';
import { Input } from '../../UI/Input/Input'

export const APITenor = () => {

    const URL = "https://g.tenor.com/v1/";
    const trend = "trending?key=";
    const search = "search?";

    const key = "SVV3UWEMXHUE";
    let limit = "&limit=16";

    const [eInput, seteInput] = useState(false) 
    const getStr = (e) => {
      seteInput(!eInput);
    }
    useEffect(() => {
      let inputAPITenor = document.querySelector('.inputAPI'); 
      let fURL = URL + search + `q=${inputAPITenor.value}&key=${key}` + limit;
      getGif(fURL);
    }, [eInput])
    
    const [gifsGet, setgifsGet] = useState([])
    useEffect(() => {
        let fURL = URL + trend + key + limit;
        getGif(fURL); 
      }, [])

    const getGif = (fURL) =>{
        fetch(fURL)
        .then(response => response.json())
        .then(data => setgifsGet(data.results))
        .catch(error => console.log("Error!"))
    }

  return (
    <div className='section5'>
       <h1>Tenor - Gif</h1>
        <Input tp="text" textInput="Escriba aquí..." style="inputAPI" valid="true" cEvent={getStr}></Input>
        <div class="tarj">
          <CardsTenor arr={gifsGet}></CardsTenor>
        </div>
    </div>
  )
}
