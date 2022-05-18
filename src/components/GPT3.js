export const getResponse = async (input) => {
    let data = { prompt: input };

    let response = await fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_API_SECRET}`
        },
        body: JSON.stringify(data)
    }).then(res => res.json());

    console.log(response);

    let text = response.choices[0].text;

    return text;
}
