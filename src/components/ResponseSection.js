import { useState } from "react";

export default function ResponseSection({ userPrompt, userInput }) {
    let secret = process.env.REACT_APP_API_SECRET;

    const [resCount, setResCount] = useState(1);
    const [contents, setContents] = useState([
        <div key="response-1" className="single-response-block">
            <p className="response-component label prompt-label">Prompt:</p>
            <p className="response-component prompt">Your prompt will appear here...</p>
            <p className="response-component label response-label">Response:</p>
            <p className="response-component response">... and the AI response will appear here!</p>
        </div>
    ]);

    const addNewResponse = async () => {
        let data = { prompt: userInput };

        let result = await fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${secret}`
            },
            body: JSON.stringify(data)
        }).then(res => res.json());

        let AIresponse = result.choices[0].text;
        
        let newState = contents;
        let newCount;
        AIresponse && (newCount = newState.unshift(
            <div key={`response-${resCount + 1}`} className="single-response-block">
                <p className="response-component label prompt-label">Prompt:</p>
                <p className="response-component prompt">{userInput}</p>
                <p className="response-component label response-label">Response:</p>
                <p className="response-component response">{AIresponse}</p>
            </div>
        ));

        setResCount(newCount);
        setContents(newState);
    }

    return (
        <section>
            <div className="submit">
                <div className="preset-box">
                    <label htmlFor="presets">Feeling stuck? Choose from some pre-written prompts:</label>
                    <select name="presets" id="presets" onChange={(e) => userPrompt = e.target.value}>
                        <option value="preset-1">What's your favorite color?</option>
                        <option value="preset-2">Tell me about your best friend.</option>
                        <option value="preset-3">What do you dream about?</option>
                        <option value="preset-4">Tell me a good joke.</option>
                    </select>
                </div>
                <button onClick={addNewResponse}>Submit</button>
            </div>

            <section id="responses">
                <h2>Responses</h2>
                {contents}
            </section>
        </section>
    )
}