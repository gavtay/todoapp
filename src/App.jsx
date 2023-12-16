import Menu from './menu/Menu.jsx';
import Main from './main/Main.jsx'; 
import './App.css'

function App() {

  return (
    <>
      <div id='app-container'>
        <div id='app-menu'>
          <Menu />
        </div>
        <div id='app-main'>
          <Main />
        </div>
      </div>
    </>
  )
}
export default App
