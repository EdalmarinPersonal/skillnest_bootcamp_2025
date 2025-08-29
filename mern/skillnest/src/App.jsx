import './App.css'
import {FirstButton,FirstInput} from './components/myButton/myButton';
//import sumar from './utils/utils.js'; //default import
import MyComponent from './components/myComponent/myComponent.jsx'; 

function App() {
  /* Logica*/
  const darClick = () => {
    alert('Me diste click');
  }
  /* HTML */
  return (
    <>
      <h1>Hola Mundo</h1>
     { /* <p>Bienvenidos a mi primer proyecto con React</p>
      <button onClick={darClick}>Click me</button>
      <FirstButton title="Login" />
      <FirstInput />*/}
      <MyComponent title="Lucía Perez" edad={28} img="https://placehold.co/200x200" activo="true" />
    </>
  )
}

export default App
