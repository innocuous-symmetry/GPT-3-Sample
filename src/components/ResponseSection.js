import { useState } from "react";

export default function ResponseSection({ userInput }) {
    let secret = process.env.API_SECRET;

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

    const help = () => {
        console.log(process.env.API_SECRET);
    }

    const addNewResponse = async () => {
        let newState = contents;
        let newCount = newState.unshift(
            <div key={`response-${resCount + 1}`} className="single-response-block">
                <div className="response-line">
                    <p>Prompt:</p>
                    <p>{userInput}</p>
                </div>

                <div className="response-line">
                    <p>Response:</p>
                    <p>.......</p>
                </div>
            </div>
        );

        setResCount(newCount);
        setContents(newState);

        let data = { prompt: userInput };

        await fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${secret}`
            },
            body: JSON.stringify(data)
        }).then(x => console.log(x));
    }

    return (
        <>
        <button onClick={addNewResponse}>Submit</button>
        <button onClick={help}>Help</button>
        <section id="responses">
            {contents}
        </section>
        </>
    )
}