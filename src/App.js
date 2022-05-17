import { useCallback, useState, useRef, useEffect } from "react";
import ResponseSection from './components/ResponseSection';
import './App.css';
import SubmitSection from "./components/SubmitSection";

function App() {
  const [userInput, setUserInput] = useState('');
  const [response, setResponse] = useState(null);

  const responseRef = useRef(null);

  const promptCallback = useCallback((userPrompt) => {
    setUserInput(userPrompt);
  }, []);

  const responseCallback = useCallback((APIresponse) => {
    setResponse(APIresponse);
  }, []);

  useEffect(() => {
    response && responseRef.current();
  }, [response]);

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
      <ResponseSection responseRef={responseRef} userInput={userInput} response={response} />
    </div>
  );
}

export default App;
