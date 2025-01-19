import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ExamplePage from "./pages/ExamplePage.jsx";

function App() {
  const [count, setCount] = useState(0)

  const page = (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )

  return (
    <Router>
      <Routes>
        <Route path='/' element={page}></Route>
        <Route path='/example' element={<ExamplePage/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
