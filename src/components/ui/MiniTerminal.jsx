import { useState } from "react";

export default function MiniTerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: "output", text: "VandanaOS v1.0.0 (tty1)" },
    { type: "output", text: 'Type "help" to see available commands.' },
  ]);
  const [secretNumber, setSecretNumber] = useState(null);

  const addLine = (text, type = "output") => {
    setHistory((prev) => [...prev, { type, text }]);
  };

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const trimmed = input.trim();
      const cmd = trimmed.toLowerCase();
      addLine(`guest@vandana:~$ ${trimmed}`, "input");

      // Number guessing game active
      if (secretNumber !== null && cmd !== "" && !isNaN(Number(cmd))) {
        const guess = Number(cmd);
        if (guess === secretNumber) {
          addLine("🎉 Correct! You nailed the secret number.");
          setSecretNumber(null);
        } else if (guess < secretNumber) {
          addLine("Too low! ⬇️ Try higher.");
        } else {
          addLine("Too high! ⬆️ Try lower.");
        }
        setInput("");
        return;
      }

      switch (cmd) {
        case "help":
          addLine("Available commands: whoami, skills, projects, contact, game, clear, sudo");
          break;

        case "whoami":
          addLine("Vandana Saharan | MCA Scholar @ Kristu Jayanti College");
          addLine("Focus: Backend & Full-Stack Systems Engineering 🚀");
          break;

        case "skills":
          addLine("► Backend: Spring Boot, Node.js, Express.js, REST APIs, Java");
          addLine("► Frontend: React.js, Vite, Tailwind CSS, JavaScript, HTML5/CSS3");
          addLine("► Databases: MySQL, MongoDB");
          addLine("► Tools: Git, GitHub, IntelliJ IDEA, VS Code, Postman");
          break;

        case "projects":
          addLine("1. Smart Poll System (Spring Boot + React + MySQL)");
          addLine("2. Mini Social Media App (MERN Stack)");
          addLine("3. E-Commerce Store (Node.js + React + MongoDB)");
          addLine("4. Interactive Portfolio (React + Tailwind + Motion)");
          break;

        case "contact":
          addLine("► Email: vandanasaharan11@gmail.com");
          addLine("► GitHub: github.com/Vandana-Saharan");
          addLine("► LinkedIn: linkedin.com/in/vandana-0bb224283");
          break;

        case "game":
          addLine("🎮 Available mini games:");
          addLine("• guess -> Number Guessing Game (1-10)");
          addLine("• rps   -> Rock, Paper, Scissors");
          break;

        case "guess": {
          const num = Math.floor(Math.random() * 10) + 1;
          setSecretNumber(num);
          addLine("I picked a number between 1 and 10. Enter your guess:");
          break;
        }

        case "rps":
          addLine("Play Rock Paper Scissors! Type: rock, paper, or scissors");
          setSecretNumber(null);
          break;

        case "rock":
        case "paper":
        case "scissors": {
          const options = ["rock", "paper", "scissors"];
          const bot = options[Math.floor(Math.random() * 3)];
          addLine(`You chose: ${cmd}`);
          addLine(`Bot chose: ${bot}`);

          if (cmd === bot) {
            addLine("🤝 It's a draw!");
          } else if (
            (cmd === "rock" && bot === "scissors") ||
            (cmd === "paper" && bot === "rock") ||
            (cmd === "scissors" && bot === "paper")
          ) {
            addLine("🎉 You win!");
          } else {
            addLine("🤖 Bot wins! Better luck next round.");
          }
          break;
        }

        case "sudo":
          addLine("🚨 Nice try! This incident will be reported to root.");
          break;

        case "clear":
          setHistory([]);
          setInput("");
          return;

        case "":
          break;

        default:
          addLine(`bash: ${cmd}: command not found. Type "help" for a list.`);
      }

      setInput("");
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-black border-4 border-black rounded-2xl shadow-neo overflow-hidden flex flex-col font-mono text-sm sm:text-base">
      <div className="bg-gray-200 border-b-4 border-black px-4 py-2.5 flex items-center justify-between select-none">
        <div className="flex gap-2">
          <div className="w-3.5 h-3.5 rounded-full bg-custom-red border-2 border-black" />
          <div className="w-3.5 h-3.5 rounded-full bg-custom-yellow border-2 border-black" />
          <div className="w-3.5 h-3.5 rounded-full bg-custom-green border-2 border-black" />
        </div>
        <span className="font-bold text-black text-xs tracking-widest font-mono">
          root@vandana:~
        </span>
        <div className="w-10" />
      </div>

      <div className="p-4 h-64 overflow-y-auto bg-black text-custom-blue custom-scrollbar">
        {history.map((line, index) => (
          <div
            key={index}
            className={`mb-1 font-mono ${
              line.type === "input" ? "text-white font-bold" : "text-custom-blue"
            }`}
          >
            {line.text}
          </div>
        ))}

        <div className="flex items-center mt-2 font-mono">
          <span className="text-custom-green mr-2 font-bold shrink-0">
            guest@vandana:~$
          </span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            className="flex-1 bg-transparent border-none outline-none text-custom-blue caret-custom-yellow font-mono"
            autoComplete="off"
            spellCheck="false"
          />
        </div>
      </div>
    </div>
  );
}
