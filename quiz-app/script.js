const quizData = [
	{
		question: 'Who was the father of computer?',
		a: 'Charlie Babbage',
		b: 'Dennis Ritchie',
		c: 'Charles Babbage',
		d: 'Ken Thompson',
		correct: 'c'
	}, {
		question: 'What is the full form of CPU?',
		a: 'Central Process Unit',
		b: 'Central Processing Unit',
		c: 'Central Programming Unit',
		d: 'Central Progressive Unit',
		correct: 'b'
	}, {
		question: 'What is the full form of CU?',
		a: 'Compound Unit',
		b: 'Communication Unit',
		c: 'Computer Unit',
		d: 'Control Unit',
		correct: 'd'
	}, {
		question: 'What is the full form of ALU?',
		a: 'Arithmetic Logic Unit',
		b: 'Arithmetic Local Unit',
		c: 'Advance Logical Unit',
		d: 'None of these',
		correct: 'a'
	}, {
		question: 'What is the full form of MU?',
		a: 'Management Unit',
		b: 'Masked Unit',
		c: 'Main Unit',
		d: 'Memory Unit',
		correct: 'd'
	}, {
		question: 'What is the full form of EEPROM?',
		a: 'Electrically Erasable Read Access Memory',
		b: 'Electrically Erasable Read Only Memory',
		c: 'Ethical Electrically Read Only Memory',
		d: 'None of these',
		correct: 'b'
	}, {
		question: 'What is the full form of SDRAM?',
		a: 'Special Dynamic Read Access Memory',
		b: 'Synchronous Dynamic Read Access Memory',
		c: 'Special Dynamic Random Access Memory',
		d: 'Synchronous Dynamic Random Access Memory',
		correct: 'd'
	}, {
		question: 'Which electronics component is used in first generation computers?',
		a: 'Transistors',
		b: 'ULSI Chips',
		c: 'Vacuum Tubes',
		d: 'LSI Chips',
		correct: 'c'
	}, {
		question: 'Which is not a correct type of a computer?',
		a: 'Mini Frame Computer',
		b: 'Super Computer',
		c: 'Workstations',
		d: 'Personal Computer',
		correct: 'a'
	}, {
		question: 'Which part of the computer is considered as Brain of the Computer?',
		a: 'Random Access Memory',
		b: 'Central Process Unit',
		c: 'Read Only Memory',
		d: 'Hard Disk',
		correct: 'b'
	}
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
	deselectAnswers();

	const currentQuizData = quizData[currentQuiz];

	questionEl.innerText = currentQuizData.question;
	a_text.innerText = currentQuizData.a;
	b_text.innerText = currentQuizData.b;
	c_text.innerText = currentQuizData.c;
	d_text.innerText = currentQuizData.d;
}

function getSelected() {
	let answer = undefined;

	answerEls.forEach(answerEl => {
		if (answerEl.checked) {
			answer = answerEl.id;
		}
	});

	return answer;
}

function deselectAnswers() {
	answerEls.forEach(answerEl => {
		answerEl.checked = false;
	});
}

submitBtn.addEventListener("click", () => {
	const answer = getSelected();

	if (answer) {
		if (answer === quizData[currentQuiz].correct) {
			score++;
		}
		console.log(quizData[currentQuiz][answer]);

		currentQuiz++;

		if (currentQuiz < quizData.length) {
			loadQuiz();
		} else {
			quiz.innerHTML = `
				<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
				<button onclick="location.reload()">Reload</button>
			`;
		}
	}
});