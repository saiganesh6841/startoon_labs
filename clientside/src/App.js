import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from './navigation/navigation';

export const baseUrl="http://localhost:4000"

function App() {
  return (
    <div className="App">
    
    <Navigation/>
    </div>
  );
}

export default App;
