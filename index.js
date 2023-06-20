const startButton = document.querySelector(".start");
const questionContainer = document.querySelector(".questions-container");
const questionField = document.querySelector(".question");
const radios = document.querySelectorAll(".radio");
const labels = document.querySelectorAll(".label");
const checkButton = document.querySelector(".check");
const points = document.querySelector(".points");
const selector = document.querySelector(".quiz-selector");
const qImage = document.querySelector(".q-image");
const rImage = document.querySelector(".r-image");
const repeat = document.querySelector(".repeat");

var currentQ;

var correct = 0;
var all = 0;
var added = 0;

var questions = [...cpp];

selector.addEventListener("change", (e) => {
  added = 0;
  switch (e.target.value) {
    case "0": {
      questions = [...cpp];
      break;
    }
    case "1": {
      questions = [...questions1];
      break;
    }
    case "2": {
      questions = [...questions2];
      break;
    }
    case "4": {
      questions = [...questions1, ...questions2, ...questions3];
      break;
    }
    case "5": {
      questions = [...python];
      break;
    }
    default: {
      questions = [...python];
    }
  }
  startQuiz();
});
var saw = false;

const startQuiz = () => {
  if (added > 0) {
    questions.splice(questions.length - added, added);
    added = 0;
  }

  shuffle(questions);
  questions.map((q) => {
    shuffle(q.a);
  });
  saw = false;
  checkButton.innerText = "Check";
  checkButton.disabled = false;

  currentQ = 0;
  questionContainer.classList.remove("invisible");

  correct = 0;
  all = 0;
  points.innerText =
    all + "/" + correct + " correct\n" + (questions.length - all) + " left";

  newQuestion();
};

startButton.addEventListener("click", () => {
  startQuiz();
});

checkButton.addEventListener("click", () => {
  if (!saw) {
    const q = questions[currentQ];
    ++all;

    var corrects = 0;
    var myCorrects = 0;

    if (q.a.length === 1) {
        radios[0].disabled = true;
		if(radios[0].value === q.a[0].a) {
			radios[0].style.setProperty("color", "green", "important");
			radios[0].style.textDecoration = "underLine";
			corrects++;
			++myCorrects;
		}else {
			radios[0].style.setProperty("color", "red", "important");
			radios[0].style.textDecoration = "underLine";
			labels[0].innerText = `Correct: ${q.a[0].a}`
			labels[0].style.visibility = "visible";
			myCorrects = 0;
			corrects = 10;
		}
    } else {
      q.a.map((a, i) => {
        const label = labels[i];
        const isChecked = radios[i].checked;
        radios[i].disabled = true;
        const isCorrect = a.correct;
        if (isCorrect) {
          label.style.setProperty("color", "green", "important");
          label.style.textDecoration = "underLine";
          corrects++;
          if (isChecked) {
            ++myCorrects;
          }
        } else if (!isCorrect && isChecked) {
          label.style.setProperty("color", "red", "important");
          label.style.textDecoration = "underLine";
          myCorrects = 0;
          corrects = 10;
        }
      });
    }
    if (myCorrects === corrects) {
      correct++;
    } else if (repeat.checked) {
      ++added;
      shuffle(q.a);
      questions.push(q);
    }
    points.innerText =
      all + "/" + correct + " correct\n" + (questions.length - all) + " left";
    saw = true;
    checkButton.innerText = "Next";
  } else {
    if (all >= questions.length) {
      checkButton.innerText = "Finished";
      checkButton.disabled = true;
      rImage.classList.remove("invisible");
      loadImg();
    } else {
      checkButton.innerText = "Check";
      saw = false;
      currentQ++;
      newQuestion();
    }
  }
});

const newQuestion = () => {
  const q = questions[currentQ];
  questionField.innerHTML = q.q;
  length = q.a.length;

  if (q.hasOwnProperty("img")) {
    qImage.classList.remove("invisible");
    qImage.src = "images/" + q.img;
  } else {
    qImage.classList.add("invisible");
  }

  if (length === 1) {
    for (let i = 1; i < 4; ++i) {
      radios[i].style.visibility = "hidden";
      labels[i].style.visibility = "hidden";
    }
    radios[0].type = "text";
    radios[0].disabled = false;
    radios[0].value = "";
    labels[0].style.visibility = "hidden";
    radios[0].classList.remove("radio");
    radios[0].classList.remove("form-check-input");

	radios[0].style.setProperty("color", "black", "important");
	radios[0].style.textDecoration = "none";
    return;
  } else {
    for (let i = 0; i < 4; ++i) {
      radios[i].style.visibility = "visible";
      labels[i].style.visibility = "visible";
      radios[i].type = "radio";
      radios[i].classList.add("radio");
      radios[i].classList.add("form-check-input");
    }
  }
  [...radios].map((r) => {
    r.type = q.hasOwnProperty("multiply") ? "checkbox" : "radio";
  });
  [...labels].map((l, i) => {
    radios[i].checked = false;
    radios[i].disabled = false;
    if (q.a[i] != null) l.innerText = q.a[i].a;
    l.style.color = "black";
    l.style.textDecoration = "none";
  });
  if (length < 4) {
    radios[3].style.visibility = "hidden";
    labels[3].style.visibility = "hidden";

    if (length < 3) {
      radios[2].style.visibility = "hidden";
      labels[2].style.visibility = "hidden";
    }
  } else {
    radios[3].style.visibility = "visible";
    labels[3].style.visibility = "visible";
    radios[2].style.visibility = "visible";
    labels[2].style.visibility = "visible";
  }
  rImage.classList.add("invisible");
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

function loadImg() {
  rImage.src = "dank/" + dank[Math.floor(Math.random() * dank.length)];
  console.log(rImage.src);
}
