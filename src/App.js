import './App.css';
import LoginPage from './components/LoginPage';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Register from './components/Register';
import QuoteRequest from './components/QuoteRequest'
import Profile from './components/Profile';
import CustomerQuotes from './components/CustomerQuotes';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<Register />} />
          <Route path='request_quote' element={<QuoteRequest />} />
          <Route path='profile' element={<Profile />} />
          <Route path='your_quotes' element={<CustomerQuotes />} />
          
        </Route>

      </Routes>
    </div>
  );
}

export default App;
