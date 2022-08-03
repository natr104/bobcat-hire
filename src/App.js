import './App.css';
import AppBarExample from './components/AppBarExample'
import CustomerQuotes from './components/CustomerQuotes';

function App() {
  return (
    <div className="App">
      <header>
        <AppBarExample />
      </header>
      <main>
        <h1>Hello world</h1>
        <CustomerQuotes />
      </main>
    </div>
  );
}

export default App;
