import ResponseSection from './components/ResponseSection';
import './App.css';
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState('');

  return (
    <div className="App">
      <h1>Fun with AI</h1>

      <section id="input-section">
        <form>
          <label htmlFor='user-prompt'>Enter prompt</label>
          <textarea id="user-prompt" onChange={(e) => setUserInput(e.target.value)}></textarea>
        </form>
      </section>

      <ResponseSection userInput={userInput} />
    </div>
  );
}

export default App;
