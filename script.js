const quizData = [
    {
        question: "Какой из предложенных вариантов не является струнно-щепковым музыкальным инструментом?",
        a: "Барабан",
        b: "Укулеле",
        c: "Арфа",
        d: "Электрогитара",
        correct: "a"
 },
    {
        question: "Чем отличается Акустическая гитара от Классической?",
        a: "Барабан, то есть корпус самой гитары",
        b: "Гриф",
        c: "Форма колков и то, как они выглядят",
        d: "Длиной струн",
        correct: "c"
    }, {
        question: "Кто из этих исполнителей прославился игрой на электрогитаре?",
        a: "Высоцкий",
        b: "В. Цой",
        c: "Пол Маккартни",
        d: "Курт Кобейн",
        correct: "d",
    }, {
        question: "Что такое мензура в гитаре?",
        a: "Длина струн",
        b: "Расстояние от верхнего до нижнего порожка",
        c: "То, за что крепятся струны",
        d: "Приём, для смены звука",
        correct: "b"
    }, {
        question: "Из каких материалов не сущесвтует Медиаторов?",
        a: "Из кости",
        b: "Из глянца",
        c: "Из пластика",
        d: "Из дерева",
        correct: "b",
    }
]
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
           <h2>Вы ответили верно на    ${score}  из  ${quizData.length} заданных вопросов</h2>

           <button onclick="location.reload()">Пройти заново</button>
           `
        }
    }
})