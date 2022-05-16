  import './App.css';
  import { Routes, Route } from "react-router-dom";
  import Admin from './pages/admin/admin'
  import Login from './pages/login/login'
  import Register from './pages/register/register'
  import List from './pages/admin/list/list'
  import Blacklist from './pages/admin/blacklist/blacklist'
  import Regulations from './pages/admin/regulations/regulations'

  function App() {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Admin />}>
          <Route path="/list" element={<List />}></Route>
          <Route path="/blacklist" element={<Blacklist />}></Route>
          <Route path="/regulations" element={<Regulations />}></Route>
        </Route>
      </Routes>
    );
  }

  export default App;
