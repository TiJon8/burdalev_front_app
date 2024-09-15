import './App.css';
// import { useEffect } from 'react';
import Button from './Components/Button';
import { useTelegram } from './hooks/useTelegram';

window.onload = function() {
  const menu = document.getElementById('menu');
  setTimeout(() => {
      menu.classList.add('show');
  }, 300); // Задержка для плавного появления
};

function App() {

  const { onClose, onToggleButton, tg, user } = useTelegram(); 

  // useEffect(() => {
  //   tg.ready();
  // },[])

  return (
    <div className="App">
      <div className="Main">
        <h1>Если не подписан</h1> 
        <span>{user?.username}</span>
        <button onClick={onToggleButton}>click</button>
      </div>
      <Button event={onClose}/>
    </div>
  );
}

export default App;
