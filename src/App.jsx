import './App.css';
import NavbarApp from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Items from "./Components/Items/Items";
import BuscaPoke from "./Components/BuscaPoke"

function App() {

  const arrayData = [

    {
      id: 1,
      nombre:"nombre1",
    },
    {
      id: 2,
      nombre:"nombre2",
    }
  ]
  return (
    <div className="App">
      <header className="App-header">
       <NavbarApp />  
      <ItemListContainer name ="Class"  />
      <Items />
      {arrayData.map(comentario => (
        <BuscaPoke comentario={ comentario } key={ comentario.id}/>
      ))}
        
      </header>
     
    </div>
  );
}

export default App;
//  el BuscaPoke es un intento de ver si de 0 me podía funcionar el map lo dejo igual porque no me funciona todavía