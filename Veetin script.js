//Making a start and next button
const startBtn = document.getElementById('start-btn')
const nextBtn = document.getElementById('next-btn')
const qContainerElement = document.getElementById
('question-container')
const qElement = document.getElementById('question')
const answerBtnElement = document.getElementById('answer-buttons')
//Making a denominator to help with shuffling and indexing questions
let randomizeQ, currentQcollect

startBtn.addEventListener('click', startG)
nextBtn.addEventListener('click', () => {
    currentQcollect++
    setNextQ()
})

//Creating the function to start the game
function startG() {
console.log('Started')
//Hide the button after clicked
startBtn.classList.add('hide')
//Making the questions have a random order
randomizeQ = questions.sort(() => Math.random() - .5)
currentQcollect = 0
qContainerElement.classList.remove('hide')
setNextQ()
}
//Creating the ability for the game to set a next question
function setNextQ() {
 resetBoard()
 showQ(randomizeQ[currentQcollect])

}
//Shows the question
function showQ(question){
 qElement.innerText = question.question
 question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    //Helps to find out if answer is correct
    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', SelectAns)
    answerBtnElement.appendChild(button)
 })
}
//Hides the 'next' button and the previous sections
function resetBoard() {
    clearStatsClass(document.body)
    nextBtn.classList.add('hide')
    while (answerBtnElement.firstChild) {
        answerBtnElement.removeChild
        (answerBtnElement.firstChild)
    }
}
//Finds out if the answer is either correct or incorrect
function SelectAns(e) {
    const selectedBtn = e.target
    const correct = selectedBtn.dataset.correct
    setStatsClass(document.body, correct)
    Array.from(answerBtnElement.children).forEach(button =>{
        setStatsClass(button, button.dataset.correct)
    })
    if (randomizeQ.length > currentQcollect + 1){
    nextBtn.classList.remove('hide')
    } else {
      startBtn.innerText = 'Aloita alusta'
      startBtn.classList.remove('hide')
    }
}
//Shows if the answer is either correct or incorrect
function setStatsClass(element, correct) {
    clearStatsClass(element)
    if(correct) {
        element.classList.add('correct')
    } else{
        element.classList.add('wrong')
    }
}
//Clears the status
function clearStatsClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
//Creating the questions for the quiz
const questions = [
    {
        question: 'Löydä oiken kirjoitettu vastaus' ,
        answers: [
            { text: 'Äidinkieli' , correct: true },
            { text: 'Äidin kieli' , correct: false },
            { text: 'Äidin-kieli' , correct: false },
        ]
    },
    {
        question: 'Mikä adjektiivin vertailu aste: Kauniimpi' ,
        answers: [
            { text: 'Positiivi' , correct: false },
            { text: 'Superlatiivi' , correct: false },
            { text: 'Komparatiivi' , correct: true },
            { text: 'Pronomini' , correct: false }
        ]
    },
    {
        question: 'Tunnista substantiivi.' ,
        answers: [
            { text: 'Juoksee' , correct: false },
            { text: 'Aika' , correct: true },
            { text: 'Lentokone' , correct: true },
            { text: 'Parempi' , correct: false }
        ]
    },
    {
        question: 'Tunnista vebin aikamuoto:"on juossut" ' ,
        answers: [
            { text: 'Preesens' , correct: false },
            { text: 'Perfekti' , correct: true },
            { text: 'Imperfekti' , correct: false },
            { text: 'Plusvamperfekti' , correct: false }
        ]
    },
    {
        question: 'Tunnista verbin passiivi' ,
        answers: [
            { text: 'Juostaan' , correct: true },
            { text: 'Juokset' , correct: false },
            { text: 'Juoksemme' , correct: false },
            { text: 'Juoksevat' , correct: false }
        ]
    }
]
