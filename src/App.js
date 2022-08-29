import './App.css';
import LoginPage from './components/LoginPage';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Register from './components/Register';
import QuoteRequest from './components/QuoteRequest'
import Profile from './components/Profile';
import CustomerQuotes from './components/CustomerQuotes';
import CustomerQuotesParent from './components/CustomerQuotesParent';
import Job from './components/Job';
import RequireAdmin from './components/RequireAdmin';
import AdminDashboard from './components/AdminDashboard';
import AdminParent from './components/AdminParent';
import AdminAddQuote from './components/AdminAddQuote';

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
          <Route path='quotes' element={<CustomerQuotesParent />}>
            <Route index element={<CustomerQuotes />} />
            <Route path=':jobId' element={<Job />} />
          </Route>
          <Route element={<RequireAdmin />}>
            <Route path='admin' element={<AdminParent />}>
              <Route index element={<AdminDashboard />} />
              <Route path='jobs/:jobId' element={<AdminParent />}>
                <Route index element={<Job />} />
                <Route path='add_quote' element={<AdminAddQuote />} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
