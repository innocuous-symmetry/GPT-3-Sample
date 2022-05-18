import { useState, useEffect } from "react";

export default function ResponseSection({ userInput, response, responseRef }) {
    const [resCount, setResCount] = useState(1);
    const [contents, setContents] = useState([]);
    const [responseToRender, setResponseToRender] = useState(null);

    useEffect(() => {
        response && setResponseToRender(response);
    }, [response]);

    useEffect(() => {
        if (responseToRender) {
            setContents((prev) => {
                return [
                    <div key={`response-${resCount+1}`} className="single-response-block">
                        <p className="response-component label prompt-label">Prompt:</p>
                        <p className="response-component prompt">{userInput}</p>
                        <p className="response-component label response-label">Response:</p>
                        <p className="response-component response">{responseToRender}</p>
                    </div>,
                ...prev]
            });
            setResCount(resCount + 1);
            setResponseToRender(null);
        }
    }, [responseToRender, contents, resCount, userInput]);

    useEffect(() => {
        console.log(contents);
    }, [contents]);
    
    return (
        <section id="responses">
            <h2>Responses</h2>
            <div className="contents">
                {contents.length > 0 ? contents : null}
                <div key="response-1" className="single-response-block">
                    <p className="response-component label prompt-label">Prompt:</p>
                    <p className="response-component prompt">Your prompt will appear here...</p>
                    <p className="response-component label response-label">Response:</p>
                    <p className="response-component response">... and the AI response will appear here!</p>
                </div>
            </div>
        </section>
    );
}
