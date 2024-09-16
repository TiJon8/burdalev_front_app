import React from 'react';
import './App.css';
import Button from './Components/Button';
import { useTelegram } from './hooks/useTelegram';
import axios from 'axios';
import { useEffect, useState } from 'react';

window.onload = function() {
  const menu = document.getElementById('menu');
  setTimeout(() => {
      menu.classList.add('show');
  }, 300); // Задержка для плавного появления
};

function App() {

  const [ response, setResponse ] = useState(null)

  const { onClose, onToggleButton, user } = useTelegram(); 

  const getUser = async () => {
    try {
      const res = await axios.post('http://192.168.0.12:8081/', {id: user.id}, {headers: {'Content-Type': 'application/json'}})
      setResponse(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  // useEffect(() => {
  //   tg.ready();
  // },[])
  useEffect(() => {
    getUser();
  })

  return (
    <div className="App">
      <div className="Main">
        {response?.is_member === 'member' ? <h1>Если подписан</h1> : <h1>Если не подписан</h1>}
        <span>{user?.username}</span>
        <button onClick={onToggleButton}>click</button>
      </div>
      <Button event={onClose}/>
    </div>
  );
}

export default App;
