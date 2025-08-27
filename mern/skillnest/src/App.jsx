import './App.css'
import {FirstButton,FirstInput} from './components/myButton/myButton';
//import sumar from './utils/utils.js'; //default import

function App() {
  /* Logica*/
  const darClick = () => {
    alert('Me diste click');
  }
  /* HTML */
  return (
    <>
      <h1>Hola Mundo</h1>
      <p>Bienvenidos a mi primer proyecto con React</p>
      <button onClick={darClick}>Click me</button>
      <FirstButton />
      <FirstInput />
    </>
  )
}

export default App
