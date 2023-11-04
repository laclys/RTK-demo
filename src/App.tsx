import logo from './logo.svg'
import { Counter } from './features/counter/Counter'
import { Dog } from './features/dog/Dog'

import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <div className='gap' >- - - - - - -</div>
        <Dog />
      </header>
    </div>
  )
}

export default App
