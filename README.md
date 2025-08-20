# 🧮 Simple JavaScript Calculator

A clean and beginner-friendly calculator built with JavaScript, HTML, and CSS. Designed to help learners understand **input handling**, **logic flow**, and **DOM manipulation** in a real-world mini project.

---

## 🔗 Live Demo

Check it out here 👉 [Live Calculator](https://decisiveHoneyBadger.github.io/calculator/)

## 🖼️ Screenshot

![Calculator Screenshot](assets/simple-js-calculator-2.png)

## 💡 Features

- Handles basic arithmetic operations: `+`, `-`, `*`, `/`
- Real-time display update
- Clear (AC) function to reset all inputs
- Decimal number support
- Backspace (←) to remove the last digit

---

## 📁 Project Structure

calculator/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
└── calculator-screenshot.png

- `index.html`: Contains the layout and display
- `style.css`: (Optional) Styling for the calculator
- `script.js`: All logic and interaction code

---

## 🧠 Logic Breakdown

### Variables

| Variable        | Purpose                                     |
| --------------- | ------------------------------------------- |
| `currentInput`  | Current number being typed (e.g. `7.8`)     |
| `previousInput` | Stored number before an operator is clicked |
| `operator`      | Stores the current operation selected       |

### Core Functions

| Function            | Role                                              |
| ------------------- | ------------------------------------------------- |
| `handleClick()`     | Master controller that routes actions             |
| `appendNumber()`    | Appends digits to input string                    |
| `chooseOperation()` | Stores operator and handles sequential operations |
| `compute()`         | Parses and evaluates expressions                  |
| `updateDisplay()`   | Shows the latest value in the UI                  |
| `clear()`           | Resets calculator to initial state                |
| `backspace()`       | Removes the last digit from current input         |

---

## 🛠️ How to Use

1. Clone the repo:
   ```bash
   git clone https://github.com/decisiveHoneyBadger/calculator.git
   cd calculator
   open index.html
   ```
