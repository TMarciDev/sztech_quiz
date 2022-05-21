const startButton = document.querySelector('.start');
const questionContainer = document.querySelector('.questions-container');
const questionField = document.querySelector('.question');
const radios = document.querySelectorAll('.radio');
const labels = document.querySelectorAll('.label');
const checkButton = document.querySelector('.check');
const points = document.querySelector('.points');
const selector = document.querySelector('.quiz-selector');

var currentQ;

var correct = 0;
var all = 0;

var questions = questions1;
questionContainer.classList.add('invisible');

selector.addEventListener('change', (e) => {
	switch (e.target.value) {
		case '1': {
			questions = questions1;
			break;
		}
		case '2': {
			questions = questions2;
			break;
		}
		default: {
			questions = questions3;
		}
	}
});

startButton.addEventListener('click', () => {
	shuffle(questions);
	questions.map((q) => {
		shuffle(q.a);
	});

	currentQ = 0;
	questionContainer.classList.remove('invisible');

	correct = 0;
	all = 0;
	points.innerText =
		all + '/' + correct + ' correct\n' + (questions.length - all) + ' left';

	newQuestion();
});

var saw = false;

checkButton.addEventListener('click', () => {
	if (!saw) {
		const q = questions[currentQ];
		++all;

		q.a.map((a, i) => {
			const label = labels[i];
			const isChecked = radios[i].checked;
			radios[i].disabled = true;
			const isCorrect = a.correct;
			if (isCorrect) {
				label.style.color = 'green';
				label.style.textDecoration = 'underLine';
				if (isChecked) {
					++correct;
				}
			} else if (!isCorrect && isChecked) {
				label.style.color = 'red';
				label.style.textDecoration = 'underLine';
			}
			points.innerText =
				all + '/' + correct + ' correct\n' + (questions.length - all) + ' left';
		});
		saw = true;
		checkButton.innerText = 'Next';
	} else {
		if (all >= questions.length) {
			checkButton.innerText = 'Finished';
			checkButton.disabled = true;
		} else {
			checkButton.innerText = 'Check';
			saw = false;
			currentQ++;
			newQuestion();
		}
	}
});

const newQuestion = () => {
	const q = questions[currentQ];
	questionField.innerText = q.q;
	length = q.a.length;

	[...labels].map((l, i) => {
		radios[i].checked = false;
		radios[i].disabled = false;
		if (q.a[i] != null) l.innerText = q.a[i].a;
		l.style.color = 'black';
		l.style.textDecoration = 'none';
	});
	if (length < 4) {
		radios[3].style.visibility = 'hidden';
		labels[3].style.visibility = 'hidden';

		if (length < 3) {
			radios[2].style.visibility = 'hidden';
			labels[2].style.visibility = 'hidden';
		}
	} else {
		radios[3].style.visibility = 'visible';
		labels[3].style.visibility = 'visible';
		radios[2].style.visibility = 'visible';
		labels[2].style.visibility = 'visible';
	}
};

function shuffle(array) {
	let currentIndex = array.length,
		randomIndex;

	// While there remain elements to shuffle.
	while (currentIndex != 0) {
		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}

	return array;
}
