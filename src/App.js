import './App.css';
import { useEffect } from 'react';
import Button from './Components/Button';

const tg = window.Telegram.WebApp;

window.onload = function() {
  const menu = document.getElementById('menu');
  setTimeout(() => {
      menu.classList.add('show');
  }, 300); // Задержка для плавного появления
};

function App() {

  useEffect( () => {
    tg.ready();
  }, [] )

  const onClose = () => {
    tg.close();
  }

  return (
    <div className="App">
      <div class="Main">
        <h1>Если не подписан</h1> 
        <p>{tg.initDataUnsafe?.user?.username}</p>
      </div>
      <Button event={onClose}/>
    </div>
  );
}

export default App;
