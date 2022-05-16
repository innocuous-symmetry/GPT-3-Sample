import { useState } from "react";

export default function ResponseSection({ userInput }) {
    let secret = process.env.REACT_APP_API_SECRET;

    const [resCount, setResCount] = useState(1);
    const [contents, setContents] = useState([
        <div key="response-1" className="single-response-block">
            <div className="response-line">
                <p>Prompt:</p>
                <p>User prompt here</p>
            </div>

            <div className="response-line">
                <p>Response:</p>
                <p>AI response here</p>
            </div>
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
                <div className="response-line">
                    <p>Prompt:</p>
                    <p>{userInput}</p>
                </div>

                <div className="response-line">
                    <p>Response:</p>
                    <p>{AIresponse}</p>
                </div>
            </div>
        ));

        setResCount(newCount);
        setContents(newState);
    }

    return (
        <section>
            <button onClick={addNewResponse}>Submit</button>
            <section id="responses">
                {contents}
            </section>
        </section>
    )
}