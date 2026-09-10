 let questions = [
  {
    "question": "Wofür wird HTML verwendet?",
    "answer_1": "Struktur",
    "answer_2": "Design",
    "answer_3": "Datenbank",
    "answer_4": "Animation",
    "correctAnswer": 1
  },
  {
    "question": "Welches HTML-Element erstellt eine Überschrift?",
    "answer_1": "h1",
    "answer_2": "p",
    "answer_3": "div",
    "answer_4": "img",
    "correctAnswer": 1
  },
  {
    "question": "Welches HTML-Element erstellt einen Absatz?",
    "answer_1": "a",
    "answer_2": "p",
    "answer_3": "h1",
    "answer_4": "ul",
    "correctAnswer": 2
  },
  {
    "question": "Welches Attribut gibt bei einem Link das Ziel an?",
    "answer_1": "src",
    "answer_2": "alt",
    "answer_3": "href",
    "answer_4": "class",
    "correctAnswer": 3
  },
  {
    "question": "Welches Element wird für ein Bild verwendet?",
    "answer_1": "img",
    "answer_2": "image",
    "answer_3": "picture",
    "answer_4": "photo",
    "correctAnswer": 1
  },
  {
    "question": "Wofür wird CSS hauptsächlich verwendet?",
    "answer_1": "Struktur",
    "answer_2": "Design",
    "answer_3": "Datenbank",
    "answer_4": "Server",
    "correctAnswer": 2
  },
  {
    "question": "Welche CSS-Eigenschaft ändert die Textfarbe?",
    "answer_1": "margin",
    "answer_2": "color",
    "answer_3": "width",
    "answer_4": "display",
    "correctAnswer": 2
  },
  {
    "question": "Welche CSS-Eigenschaft ändert die Hintergrundfarbe?",
    "answer_1": "font-size",
    "answer_2": "border",
    "answer_3": "background-color",
    "answer_4": "padding",
    "correctAnswer": 3
  },
  {
    "question": "Welche CSS-Eigenschaft verändert die Schriftgröße?",
    "answer_1": "font-size",
    "answer_2": "color",
    "answer_3": "height",
    "answer_4": "margin",
    "correctAnswer": 1
  },
  {
    "question": "Welcher CSS-Wert aktiviert Flexbox?",
    "answer_1": "block",
    "answer_2": "inline",
    "answer_3": "flex",
    "answer_4": "grid",
    "correctAnswer": 3
  },
  {
    "question": "Wofür wird JavaScript verwendet?",
    "answer_1": "Design",
    "answer_2": "Struktur",
    "answer_3": "Interaktion",
    "answer_4": "Datenbank",
    "correctAnswer": 3
  },
  {
    "question": "Was ist eine Variable?",
    "answer_1": "Speicher",
    "answer_2": "Schleife",
    "answer_3": "Funktion",
    "answer_4": "Bedingung",
    "correctAnswer": 1
  },
  {
    "question": "Welche Methode fügt ein Element am Ende eines Arrays hinzu?",
    "answer_1": "pop",
    "answer_2": "push",
    "answer_3": "shift",
    "answer_4": "slice",
    "correctAnswer": 2
  },
  {
    "question": "Welcher Operator prüft Wert und Datentyp?",
    "answer_1": "==",
    "answer_2": "=",
    "answer_3": "!=",
    "answer_4": "===",
    "correctAnswer": 4
  },
  {
    "question": "Welche Schleife wird häufig zum Durchlaufen eines Arrays verwendet?",
    "answer_1": "if",
    "answer_2": "switch",
    "answer_3": "for",
    "answer_4": "return",
    "correctAnswer": 3
  }
]

let currentQuestion = 0;

function init() {
    document.getElementById("all-questions").innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById("questionText").innerHTML = question["question"];
    document.getElementById("answer_1").innerHTML = question["answer_1"];
    document.getElementById("answer_2").innerHTML = question["answer_2"];
    document.getElementById("answer_3").innerHTML = question["answer_3"];
    document.getElementById("answer_4").innerHTML = question["answer_4"];
}