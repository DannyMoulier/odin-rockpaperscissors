function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

