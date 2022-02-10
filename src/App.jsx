import './App.css';
import {Routes, Route} from "react-router-dom";
import Admin from './pages/admin/admin'
import Login from './pages/login/login'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Admin/>}/>
    </Routes>
  );
}

export default App;
