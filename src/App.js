import { useCallback, useState, useRef } from "react";
import ResponseSection from './components/ResponseSection';
import './App.css';
import SubmitSection from "./components/SubmitSection";

function App() {
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState(null);

  const responseRef = useRef();

  const promptCallback = useCallback((userPrompt) => {
    setUserInput(userPrompt);
  }, []);

  const responseCallback = useCallback((APIresponse) => {
    setResponse(APIresponse);
  }, []);

  return (
    <div className="App">
      <h1 id="page-title">Fun with AI</h1>

      <section id="input-section">
        <form>
          <label htmlFor='user-prompt'>Enter prompt</label>
          <textarea id="user-prompt" value={userInput} onChange={(e) => setUserInput(e.target.value)}></textarea>
        </form>
      </section>

      <SubmitSection userInput={userInput} promptCallback={promptCallback} responseCallback={responseCallback} />
      <ResponseSection userInput={userInput} response={response} responseRef={responseRef} />
    </div>
  );
}

export default App;
