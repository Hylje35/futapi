import React from 'react'
import {useState, useEffect} from 'react'
import Search from './Search'
import axios from 'axios'

const API_URL = 'https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?'

export default function Player() {
    const [firstname, setFirstName] = useState("James")
    const [lastname, setLastName] = useState("Maddison")
    const [playerage, setPlayerAge] = useState("0")
    const [playerwage, setPlayerWage] = useState("0") 

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
          <h3>Search player</h3>
          <form>
              <div>
                  <label>First name</label>
                  <input value={firstname} onChange={e => setFirstName(e.target.value)} />
              </div>
              <div>
                  <label>Last Name</label>
                  <input value={lastname} onChange={e => setLastName(e.target.value)} />
              </div>
              <div>
                  <button onClick={Player}>Search</button>
              </div>
          </form>
          <p>{playerage} {playerwage}</p>
    </div>
    </>

  )
}
