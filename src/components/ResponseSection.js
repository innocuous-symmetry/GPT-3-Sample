import { useEffect, useState } from "react";

export default function ResponseSection({ userInput, response, responseRef }) {
    const [resCount, setResCount] = useState(1);

    const [contents, setContents] = useState([
        <div key="response-1" className="single-response-block">
            <p className="response-component label prompt-label">Prompt:</p>
            <p className="response-component prompt">Your prompt will appear here...</p>
            <p className="response-component label response-label">Response:</p>
            <p className="response-component response">... and the AI response will appear here!</p>
        </div>
    ]);

    const appendResponse = () => {
        let newState = contents;
        let newCount;
        response && (newCount = setContents(newState.unshift(
            <div key={`response-${resCount+1}`} className="single-response-block">
                <p className="response-component label prompt-label">Prompt:</p>
                <p className="response-component prompt">{userInput}</p>
                <p className="response-component label response-label">Response:</p>
                <p className="response-component response">{response}</p>
            </div>
        )));

        setResCount(newCount);

        console.log(contents);
    }

    useEffect(() => {
        responseRef.current = appendResponse;
    }, []);
    
    return (
        <section id="responses">
            <h2>Responses</h2>
            {contents}
        </section>
    )
}