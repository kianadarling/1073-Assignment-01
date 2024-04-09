// Constants for p tag to display query selectors
const display1 = document.getElementById('choosenNoun1');
const display2 = document.getElementById('choosenVerb');
const display3 = document.getElementById('choosenAdjective');
const display4 = document.getElementById('choosenNoun2');
const display5 = document.getElementById('choosenSetting');

// Variables for count to grab array elements
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;

// Variables for pre-defined arrays
const noun1 = ['Kiana/1227169', 'The turkey', 'Mom', 'Dad', 'The dog', 'My teacher', 'The elephant', 'The cat' ];
const verb = ['sat on', 'ate', 'danced with', 'saw', "doesn't like", 'kissed'];
const adjective = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
const noun2 = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
const setting = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes'];

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    const randomNoun1 = noun1[Math.floor(Math.random() * noun1.length)];
    display1.textContent = randomNoun1;
    count1++;
}

function verb_on_click() {
    const randomVerb = verb[Math.floor(Math.random() * verb.length)];
    display2.textContent = randomVerb;
    count2++;
}

function adjective_on_click() {
    const randomAdjective = adjective[Math.floor(Math.random() * adjective.length)];
    display3.textContent = randomAdjective;
    count3++;
}

function noun2_on_click() {
    const randomNoun2 = noun2[Math.floor(Math.random() * noun2.length)];
    display4.textContent = randomNoun2;
    count4++;
}

function setting_on_click() {
    const randomSetting = setting[Math.floor(Math.random() * setting.length)];
    display5.textContent = randomSetting;
    count5++;
}

// Concatenate the user story and display
function playback_on_click() {
    const selectedNoun1 = display1.textContent;
    const selectedVerb = display2.textContent;
    const selectedAdjective = display3.textContent;
    const selectedNoun2 = display4.textContent;
    const selectedSetting = display5.textContent;
    
    const story = `${selectedNoun1} ${selectedVerb} ${selectedAdjective} ${selectedNoun2} ${selectedSetting}`;
    document.getElementById('story').textContent = story;
}

// Generate a random story and display
function random_on_click() {
    const randomNoun1 = noun1[Math.floor(Math.random() * noun1.length)];
    const randomVerb = verb[Math.floor(Math.random() * verb.length)];
    const randomAdjective = adjective[Math.floor(Math.random() * adjective.length)];
    const randomNoun2 = noun2[Math.floor(Math.random() * noun2.length)];
    const randomSetting = setting[Math.floor(Math.random() * setting.length)];
    
    const story = `${randomNoun1} ${randomVerb} ${randomAdjective} ${randomNoun2} ${randomSetting}`;
    
    document.getElementById('story').textContent = story;
}

/* Event Listeners
-------------------------------------------------- */
document.getElementById('noun1').addEventListener('click', noun1_on_click);
document.getElementById('verb').addEventListener('click', verb_on_click);
document.getElementById('adjective').addEventListener('click', adjective_on_click);
document.getElementById('noun2').addEventListener('click', noun2_on_click);
document.getElementById('setting').addEventListener('click', setting_on_click);
document.getElementById('playback').addEventListener('click', playback_on_click);
document.getElementById('random').addEventListener('click', random_on_click);

// Set student ID
const studentIdParagraph = document.getElementById('studentId');
const studentId = '1227169/Kiana';
studentIdParagraph.textContent = studentId;
