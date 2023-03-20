import { Navbar } from './components/Navbar/Navbar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"VELAS DE SOJA 100% NATURAL"}/>
    </div>
  );
}

export default App;
