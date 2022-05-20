//canvas solved site html here:
const site = ``;

const p = document.querySelector('.p');
const q = document.querySelector('.q');
p.innerHTML = site;

const boxes = document.querySelectorAll('.display_question');

const res = [];

boxes.forEach((b) => {
	const question = b
		.querySelector('.question_text')
		.innerText.replace(/[\n\t\r]/g, '')
		.trim();

	const answers = b.querySelectorAll('.answer_text');
	const isChecked = b.querySelectorAll('.answer');

	var checked = 0;
	var found = false;
	[...isChecked].map((a) => {
		if (a.classList.contains('selected_answer')) {
			found = true;
		} else if (!found) {
			checked++;
		}
	});
	res.push({
		q: question,
		a: [...answers].map((a, i) => {
			return { a: a.innerText, correct: i === checked };
		}),
	});
});

q.innerText = JSON.stringify(res);
