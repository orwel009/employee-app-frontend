import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddEmployee from './components/AddEmployee';
import ViewEmployee from './components/ViewEmployee';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddEmployee/>}/>
          <Route path='/view' element={<ViewEmployee/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
