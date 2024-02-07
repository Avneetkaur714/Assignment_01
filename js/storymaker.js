// Assignment 1 | COMP1073 Client-Side JavaScript
/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Button = document.getElementById("noun1");
const verbButton = document.getElementById("verb");
const adjectiveButton = document.getElementById("adjective");
const noun2Button = document.getElementById("noun2");
const settingButton = document.getElementById("setting");

// Constants for p tag to display query selectors
const chosenNoun1P = document.getElementById("choosenNoun1");
const chosenVerbP = document.getElementById("choosenVerb");
const chosenAdjectiveP = document.getElementById("choosenAdjective");
const chosenNoun2P = document.getElementById("choosenNoun2");
const chosenSettingP = document.getElementById("choosenSetting");

// Constants for final buttons and p tags
const playbackButton = document.getElementById("playback");
const randomButton = document.getElementById("random");

// New button for creating a random story
const newRandomStoryButton = document.getElementById("newRandomStory");

// Variables for pre-defined arrays
const nouns = ["boy", "girl", "insect", "tree", "Toronto"];
const verbs = ["sleep", "dance", "flies", "sits", "eats"];
const adjectives = ["hapy", "sad", "colorful", "loud", "big"];
const settings = ["food", "sky", "music", "city", "forest"];

// Variables for count to grab array elements
let nounCount = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;

// Variable to store the user's story
let userStory = "";

/* Functions
-------------------------------------------------- */
function chooseRandom(id, array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    document.getElementById(id).textContent = array[randomIndex];
}

function showStory() {
    const noun1 = document.getElementById('choosenNoun1').textContent;
    const verb = document.getElementById('choosenVerb').textContent;
    const adjective = document.getElementById('choosenAdjective').textContent;
    const noun2 = document.getElementById('choosenNoun2').textContent;
    const setting = document.getElementById('choosenSetting').textContent;

    const story = `${noun1} ${verb} ${adjective} ${noun2} in ${setting}.`;
    document.getElementById('story').textContent = story;
}

function generateRandomStory() {
    chooseRandom('choosenNoun1', nouns);
    chooseRandom('choosenVerb', verbs);
    chooseRandom('choosenAdjective', adjectives);
    chooseRandom('choosenNoun2', nouns);
    chooseRandom('choosenSetting', settings);
    showStory();
}

function newRandomStory_on_click() {
    // Reset the user's story variable
    userStory = "";

    // Generate a completely new random story
    generateRandomStory();
}

function resetStory() {
    chosenNoun1P.textContent = "";
    chosenVerbP.textContent = "";
    chosenAdjectiveP.textContent = "";
    chosenNoun2P.textContent = "";
    chosenSettingP.textContent = "";
    userStory = "";
    document.getElementById('story').textContent = "";
}

// Function to dynamically add student ID or name
function addStudentId() {
    const studentId = "200516907"; // Replace with your actual student ID
    document.getElementById('studentId').textContent = `Student ID: ${studentId}`;
}

/* Event Listeners
-------------------------------------------------- */
noun1Button.addEventListener("click", function () {
    chooseRandom('choosenNoun1', nouns);
    userStory += document.getElementById('choosenNoun1').textContent + " ";
});

verbButton.addEventListener("click", function () {
    chooseRandom('choosenVerb', verbs);
    userStory += document.getElementById('choosenVerb').textContent + " ";
});

adjectiveButton.addEventListener("click", function () {
    chooseRandom('choosenAdjective', adjectives);
    userStory += document.getElementById('choosenAdjective').textContent + " ";
});

noun2Button.addEventListener("click", function () {
    chooseRandom('choosenNoun2', nouns);
    userStory += document.getElementById('choosenNoun2').textContent + " ";
});

settingButton.addEventListener("click", function () {
    chooseRandom('choosenSetting', settings);
    userStory += document.getElementById('choosenSetting').textContent + " ";
});

playbackButton.addEventListener("click", function () {
    document.getElementById('story').textContent = userStory;
});

randomButton.addEventListener("click", generateRandomStory);

// Event listener for the new button
newRandomStoryButton.addEventListener("click", newRandomStory_on_click);

// Event listener to add student ID dynamically
document.addEventListener("DOMContentLoaded", addStudentId);
