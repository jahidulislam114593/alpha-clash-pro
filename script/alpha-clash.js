function continueGame()
{
    // Generate a RandomAlpabet Function
    const alphabet = getRandomAlphabet();
    console.log("You alphabet is : ", alphabet);
}
function play()
{
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}
