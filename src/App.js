import './App.css';
import LoginPage from './components/LoginPage';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<Register />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
