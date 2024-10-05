const quizData = [
    {
        question: "What is the main cause of climate change?",
        a: "Deforestation",
        b: "Burning fossil fuels",
        c: "Agriculture",
        d: "All of the above",
        correct: "d"
    },
    {
        question: "What is a consequence of climate change?",
        a: "Rising sea levels",
        b: "Extreme weather events",
        c: "Loss of biodiversity",
        d: "All of the above",
        correct: "d"
    },
    {
        question: "What can individuals do to help combat climate change?",
        a: "Reduce, reuse, recycle",
        b: "Use public transport",
        c: "Plant trees",
        d: "All of the above",
        correct: "d"
    },
];

const facts = [
    "Climate change affects the poorest and most vulnerable populations the most.",
    "Global temperatures have increased by about 1.2°C since the late 19th century.",
    "The effects of climate change are felt around the world, including heatwaves, flooding, and drought.",
];

document.addEventListener("DOMContentLoaded", () => {
    const quizContainer = document.getElementById("quiz");
    quizData.forEach((data, index) => {
        quizContainer.innerHTML += `
            <div>
                <p>${data.question}</p>
                <label><input type="radio" name="question${index}" value="a"> ${data.a}</label><br>
                <label><input type="radio" name="question${index}" value="b"> ${data.b}</label><br>
                <label><input type="radio" name="question${index}" value="c"> ${data.c}</label><br>
                <label><input type="radio" name="question${index}" value="d"> ${data.d}</label><br>
            </div>
        `;
    });

    const factsContainer = document.getElementById("facts");
    facts.forEach(fact => {
        factsContainer.innerHTML += `<li>${fact}</li>`;
    });
});

function checkAnswers() {
    let score = 0;
    quizData.forEach((data, index) => {
        const answer = document.querySelector(`input[name="question${index}"]:checked`);
        if (answer && answer.value === data.correct) {
            score++;
        }
    });
    document.getElementById("result").innerText = `You got ${score} out of ${quizData.length} correct!`;
}
