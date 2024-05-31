function handleKeyboardUpEvent(event)
{
    const playerPressed = event.key;

    // getting expected key to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed, expectedAlphabet);

    // checking matched or not
    if(playerPressed == expectedAlphabet)
        {
            console.log("You Get a Point");
        }else
        {
            console.log("You missed!! You Lost a Life");
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
    showElementById('play-ground');
    continueGame();
}
