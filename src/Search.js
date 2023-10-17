import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import Player from './Player';

export default function Search ({firstname, lastname}) {
  const API_URL = 'https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?'

  const [playerage, setPlayerAge] = useState()
  const [playerwage, setPlayerWage] = useState()

  useEffect(() => {
    const address = API_URL +
    'p=' + firstname +
    '%20' + lastname

    axios.get(address)
    .then((response) => {
        console.log(response.data)
        setPlayerWage(response.data.player.strWage);
        setPlayerAge(response.data.player.dateBorn);
    }).catch (error => (
        alert(error)
    ))
    },[firstname, lastname])


    


  return (
    <>
    <div>
      <output>Player name: {firstname} {lastname}</output>
      <output>Wage: {playerwage}</output>
      <output>Age: {playerage}</output>
    </div>
    </>
  )
}



/*



const API_URL = 'https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?'

export default function Search({firstname, lastname}) {
    //const [playername, setPlayerName] = useState('')
    const [playerwage, setPlayerWage] = useState('')

    
    useEffect(() => {
    const address = API_URL +
    'p=' + firstname +
    '%20' + lastname

    axios.get(address)
    .then((response) => {
        console.log(response.data)
        setPlayerWage(response.data.player.strWage);
    }).catch (error => (
        alert(error)
    ))
    },[firstname, lastname])
      
  return (
    
    <div>
      <p>Players wage: {playerwage}</p>
    </div>
    
  )
} */
