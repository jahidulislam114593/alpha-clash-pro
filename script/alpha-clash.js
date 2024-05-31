function handleKeyboardUpEvent(event)
{
    const playerPressed = event.key;
    if(playerPressed == 'Escape')
        {
            gameOver();
        }

    // getting expected key to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed, expectedAlphabet);

    // checking matched or not
    if(playerPressed == expectedAlphabet)
        {
            console.log("You Get a Point");

            const currentScore = getTextElementValueById('current-score');
            const updatedScore = currentScore + 1;
            setTextElementValueById('current-score', updatedScore); 
            // // update score
            // // 1. get current score 
            // const currentScoreElement = document.getElementById('current-score');
            // const currentScoreText = currentScoreElement.innerText;
            // const currentScore = parseInt(currentScoreText);
            // // 2. increase the score by 1
            // const newScore = currentScore + 1;
            // // 3. show the updated score
            // currentScoreElement.innerText = newScore; 
            removeBackgroundColorById(expectedAlphabet);
            continueGame();
        }else
        {
            console.log("You missed!! You Lost a Life");
            const currentLife = getTextElementValueById('current-life');
            const updatedLife = currentLife - 1;
            setTextElementValueById('current-life', updatedLife);

            if(updatedLife === 0)
                {
                    gameOver();
                }
            // // get current life number
            // const currentLifeElement = document.getElementById('current-life');
            // const currentLifeText = currentLifeElement.innerText;
            // const currentLife = parseInt(currentLifeText);
            // // 2. reduce the score by 1
            // const newLife = currentLife - 1;
            // // 3. show the updated life
            // currentLifeElement.innerText = newLife; 
        }
        
}
document.addEventListener('keyup', handleKeyboardUpEvent);
function continueGame()
{
    // Generate a RandomAlpabet Function
    const alphabet = getRandomAlphabet();
    // console.log("You alphabet is : ", alphabet);

    // shown the alphabet
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerHTML = alphabet;

    setBackgroundColorById(alphabet);
}
function play()
{
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    continueGame();
}

function gameOver()
{
    hideElementById('play-ground');
    showElementById('final-score');
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore);

    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}
