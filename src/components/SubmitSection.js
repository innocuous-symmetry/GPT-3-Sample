import { getResponse } from "./GPT3.js";

export default function SubmitSection({ promptCallback, userInput, responseCallback }) {
    const createNewEntry = async () => {
        if (!userInput) return;
        await getResponse(userInput).then((x) => responseCallback(x));
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
            <button onClick={createNewEntry}>Submit</button>
        </div>
    )
}
