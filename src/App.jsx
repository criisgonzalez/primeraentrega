import './App.css';
import NavbarApp from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Items from "./Components/Items/Items";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NavbarApp />  
      </header>
      <ItemListContainer name ="Class"  />
       <Items />
    </div>
  );
}

export default App;
