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
