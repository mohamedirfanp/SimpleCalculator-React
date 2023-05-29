import logo from './logo.svg';
import './App.css';
import {SimpleCalculator} from './Components/SimpleCalc/SimpleCalculator'


function App() {
  return (
    <div className="App">
      <section className="App-header">
        <SimpleCalculator />
      </section>
    </div>
  );
}

export default App;
