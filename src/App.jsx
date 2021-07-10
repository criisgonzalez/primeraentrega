import './App.css';
import NavbarApp from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemCount from "./Components/ItemCount/ItemCount";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NavbarApp /> 
       <ItemListContainer name ="Class"  />
       <ItemCount initial={1} stock={5} />
      </header>
    </div>
  );
}

export default App;
