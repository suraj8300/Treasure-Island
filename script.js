document.addEventListener("DOMContentLoaded", () => {
    const story = document.getElementById("story");
    const choices = document.getElementById("choices");
    const restartButton = document.getElementById("restart");

    let currentScene = null;

    const scenes = {
        start: {
            text: "You are at the start of your adventure. Do you want to go left or right?",
            choices: [
                { text: "Left", nextScene: "lake" },
                { text: "Right", nextScene: "hole" }
            ]
        },
        hole: {
            text: "You fell into a hole. Game Over!",
            choices: [],
            gameOver: true
        },
        lake: {
            text: "You arrive at a lake. Do you want to swim or wait for a boat?",
            choices: [
                { text: "Swim", nextScene: "trout" },
                { text: "Wait", nextScene: "door" }
            ]
        },
        trout: {
            text: "You were attacked by a trout. Game Over!",
            choices: [],
            gameOver: true
        },
        door: {
            text: "You see three doors: red, blue, and yellow. Which one will you choose?",
            choices: [
                { text: "Red", nextScene: "fire" },
                { text: "Blue", nextScene: "beasts" },
                { text: "Yellow", nextScene: "win" }
            ]
        },
        fire: {
            text: "You were burned by fire. Game Over!",
            choices: [],
            gameOver: true
        },
        beasts: {
            text: "You were eaten by beasts. Game Over!",
            choices: [],
            gameOver: true
        },
        win: {
            text: "Congratulations! You found the treasure! You Win!",
            choices: [],
            gameOver: false
        }
    };

    function startGame() {
        currentScene = "start";
        restartButton.style.display = "none";
        showScene();
    }

    function showScene() {
        const scene = scenes[currentScene];
        story.textContent = scene.text;

        choices.innerHTML = "";
        scene.choices.forEach(choice => {
            const button = document.createElement("button");
            button.textContent = choice.text;
            button.addEventListener("click", () => {
                currentScene = choice.nextScene;
                showScene();
            });
            choices.appendChild(button);
        });

        if (scene.gameOver) {
            restartButton.style.display = "block";
        }
    }

    restartButton.addEventListener("click", startGame);

    startGame();
});
