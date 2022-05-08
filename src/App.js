
import './App.css';
import NavBar from './component/NavBar/NavBar';
import CustomModals from './component/ui/input/modals/modals';
import CustomTable from './component/ui/input/table/table';
import CustomCards from './component/cards/Cards';
function App() {
  return (
    <div className="App">
     <NavBar />
     <CustomModals />
     <CustomTable />
     <CustomCards />
    </div>
  );
}

export default App;
