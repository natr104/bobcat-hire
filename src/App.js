import { Container } from '@mui/material';
import './App.css';
import AppBarExample from './components/AppBarExample'
import CustomerQuotes from './components/CustomerQuotes';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <div className="App">
      <header>
        <AppBarExample />
      </header>
      <Container component='main' sx={{ height: '100%' }}>
        {/* <h1>Hello world</h1> */}
        <LoginPage />
      </Container>
    </div>
  );
}

export default App;
