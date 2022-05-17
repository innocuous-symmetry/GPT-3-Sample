export default function SubmitSection({ promptCallback, userInput, responseCallback }) {
    const getResponse = async () => {
        let data = { prompt: userInput };

        await fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.REACT_APP_API_SECRET}`
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then(x => responseCallback(x.choices[0].text));
    }

    return (
        <div className="submit">
            <div className="preset-box">
                <label htmlFor="presets">Feeling stuck? Choose from some pre-written prompts:</label>
                <select name="presets" id="presets" onChange={(e) => promptCallback(e.target.value)}>
                    <option value="What's your favorite color?">What's your favorite color?</option>
                    <option value="Tell me about your best friend.">Tell me about your best friend.</option>
                    <option value="What do you dream about?">What do you dream about?</option>
                    <option value="Tell me a good joke.">Tell me a good joke.</option>
                </select>
            </div>
            <button onClick={getResponse}>Submit</button>
        </div>
    )
}
