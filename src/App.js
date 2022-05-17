import { useState } from "react";
import ResponseSection from './components/ResponseSection';
import './App.css';

function App() {
  const [userInput, setUserInput] = useState('');

  const userPrompt = null;

  return (
    <div className="App">
      <h1 id="page-title">Fun with AI</h1>

      <section id="input-section">
        <form>
          <label htmlFor='user-prompt'>Enter prompt</label>
          <textarea id="user-prompt" value={userPrompt} onChange={(e) => setUserInput(e.target.value)}></textarea>
        </form>
      </section>

      <ResponseSection userInput={userInput} prompt={userPrompt}/>
    </div>
  );
}

export default App;
