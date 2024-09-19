import React from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import axios from 'axios';
import { useEffect, useState } from 'react';
import MemberButton from './Components/MemberButton';
import Loader from './Components/Loader';

function App() {

  const [ response, setResponse ] = useState(null)
  const { onToggleButton, user } = useTelegram(); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const timer = setTimeout(() => {
          setLoading(false);
      }, 4000);

      // Clear the timeout when the component unmounts
      return () => clearTimeout(timer);
  }, []);

  const user_id = user?.id

  useEffect(() => {
    getUser();
  }, [setResponse])

  const getUser = async () => {
    try {
      const res = await axios.post('https://a2d6-77-37-227-80.ngrok-free.app/', {id: user_id.toString()}, {headers: {'Content-Type': 'application/json'}})
      setResponse(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="App">
      <Loader />
      <div className="Main">
        {response?.is_member === 'member' ? <h1>Если подписан</h1> : <h1>Если не подписан</h1>}
      </div>
      {response?.is_member === "member" ? <MemberButton /> : onToggleButton(response?.is_member)}
    </div>
  );
}

export default App;
