"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const fileSystem = {
  "~": {
    type: "dir",
    contents: {
      projects: {
        type: "dir",
        contents: {
          scriptocol: {
            type: "file",
            content:
              "📁 Scriptocol - AI-Powered Code Analysis GitHub App\n🔒 Security Analysis: Detects vulnerabilities and suggests fixes\n🎯 Code Quality: Identifies issues and best practice violations\n🚀 Automated Fixes: Creates PRs with AI-generated improvements\n🌐 Multi-language Support: JavaScript/TypeScript, Python, Go\n🤖 AI-Powered: Uses advanced AI to understand and fix code\n\n🛠️ Tech Stack: Node.js, OpenAI API, GitHub API\n📈 Features: Auto-analysis on push, PR creation, security scanning\n🔗 GitHub: https://github.com/shreyas-omkar/Scriptocol",
          },
          liquidpay: {
            type: "file",
            content:
              "💧 LiquidPay - AI-Driven Financial Behavior Platform\n🔍 Smart Transaction Classification: ML model categorizes needs vs wants\n📊 Financial Forecasting: LSTM predicts weekly financial health\n🎯 Personalized Daily Goals: AI-generated actionable financial goals\n🪙 Blockchain Rewards: SaveIT (SIT) ERC-20 tokens on Polygon Amoy\n📈 Interactive Dashboard: Live stats, goal tracking, notifications\n\n🛠️ Tech Stack: NextJS, ExpressJS, MongoDB, ThirdWebJS, TensorFlow, GeminiAPI\n💰 Impact: Helps underserved communities develop better money habits\n🔗 GitHub: https://github.com/shreyas-omkar/liquidPay",
          },
          voidpass: {
            type: "file",
            content:
              "🔐 VoidPass - Selective Decryption Auth API\n🔑 Key Splitting: Divides encryption keys into public/private pairs\n🤖 AI-Powered Filtering: Uses AI to decrypt and return only non-sensitive data\n🛡️ Security First: Ensures full encryption while selective data access\n📡 API-Ready: Fully developed API for seamless integration\n🔗 Blockchain Integration: Built with ThirdWeb and Polygon\n\n🛠️ Tech Stack: Node.js, Express.js, ThirdWeb, Polygon\n🎯 Use Case: Secure data access with intelligent content filtering\n🔗 GitHub: https://github.com/shreyas-omkar/VoidPass",
          },
          marketflux: {
            type: "file",
            content:
              "📁 MarketFlux - E-commerce Vendor Dashboard\n📊 Multi-platform Support: Amazon Storefront & Flipkart integration\n📈 Real-time Insights: Sales analytics and performance metrics\n🛒 Data Management: Centralized vendor data access and maintenance\n📱 User-friendly Interface: Streamlined dashboard for vendors\n\n🛠️ Tech Stack: MERN Stack + SP-API\n🎯 Purpose: Simplifies vendor operations across major e-commerce platforms\n🔗 GitHub: https://github.com/shreyas-omkar/MarketFlux",
          },
          lispcompiler: {
            type: "file",
            content:
              "🔧 Lisp Compiler v0.1 - Minimal Lisp Interpreter in Zig\n⚡ Core Features: Tokenization, parsing, and evaluation\n🧮 Arithmetic Support: +, -, *, /, % operations\n🌳 Nested Expressions: Full support for complex nested structures\n🛡️ Error Handling: Unbalanced parentheses, division by zero\n📟 Interactive REPL: Real-time expression evaluation\n\n🛠️ Tech Stack: Zig (v0.11.0+)\n🎯 Learning Project: Demonstrates compiler/interpreter fundamentals\n🔗 GitHub: https://github.com/shreyas-omkar/Lisp-Compiler",
          },
          furryfriend: {
            type: "file",
            content:
              "🐾 Furry Friend - Pet Care & Veterinary Platform\n👩‍⚕️ Vet Consultations: Professional veterinary advice via email\n💊 Medication Purchasing: Direct access to prescribed medications\n🎨 User-friendly Interface: Easy navigation for pet care management\n📧 Email Integration: Seamless communication with veterinarians\n🛒 E-commerce: Integrated medication purchasing system\n\n🛠️ Tech Stack: React.js, Node.js, Express.js, MongoDB, Mailtrap\n❤️ Mission: Comprehensive pet healthcare in one platform\n🔗 GitHub: https://github.com/shreyas-omkar/Pixel_Pioneers",
          },
          hftsim: {
            type: "file",
            content:
              "⚡ HFT Real-Time Trade Engine Simulator\n📈 Real-time Trading: Live stock trading simulation using Angel API\n🔌 WebSocket Streams: Ultra-fast data feeds for market simulation\n⚡ Speed Optimized: Built for microsecond-precision execution\n💾 State Persistence: Maintains trading state across sessions\n📊 Market Analysis: Real-time price analysis and trade execution\n🎯 Performance Focus: Engineered for maximum trading speed\n\n🛠️ Tech Stack: C++, WebSockets, Angel One API\n💰 Purpose: Professional-grade HFT strategy development and testing\n🔗 GitHub: https://github.com/shreyas-omkar/HFT_Sim",
          },
        },
      },
      techstacks: {
        type: "dir",
        contents: {
          languages: {
            type: "file",
            content:
              "💻 Languages:\n- JavaScript\n- TypeScript\n- C++\n- C\n- Zig\n- HTML\n- CSS",
          },
          frameworks: {
            type: "file",
            content:
              "⚙️ Frameworks:\n- React\n- Next.js\n- Node.js\n- Express.js\n- Tailwind CSS\n- Bootstrap",
          },
          tools: {
            type: "file",
            content:
              "🛠 Tools:\n- Git\n- Postman\n- Figma",
          },
          platforms: {
            type: "file",
            content:
              "📦 Platforms:\n- Linux\n- Web\n- Windows\n- MongoDB\n- ThirdWebJS\n- Netlify\n- Render",
          },
          skills: {
            type: "file",
            content:
              "🎯 Soft Skills:\n- Leadership\n- Event Management\n- Writing\n- Time Management",
          },
        },
      },
      achievements: {
  type: "dir",
  contents: {
    hackoasis: {
      type: "file",
      content:
        "🥇 First Prize at HackOasis v2\n🏢 Organized by ByteXync\n📅 November 2024",
    },
    hacknocturne: {
      type: "file",
      content:
        "🏅 Top 6 Finalist at HackNocturne\n🏫 Organized by MVIT\n📅 March 2025",
    },
    mitbsolstice: {
      type: "file",
      content:
        "💻 Participant at MIT Bangalore's Solstice Hackathon\n🕒 24-hour national level hackathon\n📅 March 2025",
    },
  },
},

      resume: {
        type: "dir",
        contents: {
          "resume.pdf": {
            type: "file",
            content: "📄 Resume - Shreyas Hegde\nUse 'pacman -Syu resume' to download this file.",
            downloadUrl: "https://drive.google.com/uc?export=download&id=1c0xjjOLIxZCTfHMWg17QFozWZHb2KVT0",
          }
        }
      },
    },
  },
};

function getPathParts(path) {
  return path === "~" ? ["~"] : path.split("/").filter(Boolean);
}

function getDirFromPath(path) {
  let parts = getPathParts(path);
  let node = fileSystem["~"];
  for (let i = 1; i < parts.length; i++) {
    if (!node.contents || !node.contents[parts[i]]) return null;
    node = node.contents[parts[i]];
  }
  return node;
}

function relativePromptPath(cwd) {
  if (cwd === "~") return "~";
  return cwd.slice(2);
}

// ASCII art lines of your logo (replace this with your ASCII image)
const asciiArtLines = [
  " _____ ",
  "/ ____|",
  "| (___  ",
  " \\___ \\ ",
  " ____) |",
  "|_____/ ",
  "",
  " _    _ ",
  "| |  | |",
  "| |__| |",
  "|  __  |",
  "| |  | |",
  "|_|  |_|",
  "",
  " _____  ",
  "|  __ \\ ",
  "| |__) |",
  "|  _  / ",
  "| | \\ \\ ",
  "|_|  \\_\\",
  "",
  " ______ ",
  "|  ____|",
  "| |__   ",
  "|  __|  ",
  "| |____ ",
  "|______|",
  "",
  " __   __ ",
  " \\ \\ / / ",
  "  \\ V /  ",
  "   | |   ",
  "   | |   ",
  "   |_| ",
  "",
  "",
  "    /\\    ",
  "   /  \\   ",
  "  / /\\ \\  ",
  " / ____ \\ ",
  "/_/    \\_\\",
  "",
  " _____ ",
  "/ ____|",
  "| (___  ",
  " \\___ \\ ",
  " ____) |",
  "|_____/ "
];

// About info lines for neofetch
const aboutInfoLines = [
            "👨‍💻 Shreyas Hegde - Full Stack Developer & Systems Engineer\n📧 Email: shreyashegdeplus06@icloud.com\n📱 Mobile: +91-78209 82771\n🌐 Portfolio: shreyasomkar.netlify.app\n💼 LinkedIn: linkedin.com/shreyas-omkar-hegde/\n📚 GitHub: github.com/shreyas-omkar\n\n🎓 Education:\n• Dayananda Sagar College Of Engineering, Bengaluru\n• Bachelor of Engineering - Information Science and Engineering\n• GPA: 9.9 | July 2024 - June 2028\n\n💻 Languages: JavaScript, TypeScript, C++, C, Zig, HTML, CSS\n🚀 Frameworks: React, NextJs, NodeJs, ExpressJs, Tailwind CSS, Bootstrap\n🛠️ Tools: Git, Postman, Figma\n📦 Platforms: Linux, Web, Windows, MongoDB, ThirdWebJS, Netlify, Render\n🎯 Soft Skills: Leadership, Event Management, Writing, Time Management\n\n💼 Experience:\n• Point Blank (Sep 2024 - Present) - Full Stack Developer\n• MarketFlux (Jan 2024 - Present) - Full Stack Developer & Founder\n\n🏆 Achievements:\n• First Prize at HackOasis v2 (ByteXync - Nov 2024)\n• Top 6th Position at HackNocturne (MVIT - March 2025)\n• Participated at MIT Bangalore's Solistice 24hr Hackathon (March 2025)",

];

const Home = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    "🧠 Welcome to Shreyas Hegde's Terminal Portfolio!",
    "Type 'hello' to begin.",
  ]);
  const [mode, setMode] = useState("init");
  const [cwd, setCwd] = useState("~");
  const [historyIndex, setHistoryIndex] = useState(null);
  const commandHistory = useRef([]);

  const endRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Cursor blinking effect with CSS handled below

  const commandsList = [
    { cmd: "ls", desc: "List directory contents" },
    { cmd: "cd [dir]", desc: "Change directory" },
    { cmd: "cat [file]", desc: "View file content" },
    { cmd: "clear", desc: "Clear the terminal" },
    { cmd: "help", desc: "Show this help message" },
    { cmd: "pacman -Syu resume", desc: "Download my resume" },
    { cmd: "neofetch", desc: "Show system info and ASCII art" },
    { cmd: "exit", desc: "Exit terminal" },
  ];

  const prompt = `shaggy@space:${relativePromptPath(cwd)}$`;

  const handleNeofetch = () => {
    // Compose neofetch output: ascii on left, info on right horizontally aligned
    // We'll animate the ascii art lines with framer motion
    
    // Max height for alignment
    const maxLines = Math.max(asciiArtLines.length, aboutInfoLines.length);
    
    // Build combined lines
    let combinedLines = [];
    for (let i = 0; i < maxLines; i++) {
      const asciiLine = asciiArtLines[i] || "";
      const aboutLine = aboutInfoLines[i] || "";
      combinedLines.push({ asciiLine, aboutLine });
    }

    // We will return a special object so that in render we can detect and animate it
    return combinedLines;
  };

  const downloadResume = () => {
    const resumeFile = fileSystem["~"].contents.resume.contents["resume.pdf"];
    if (resumeFile && resumeFile.downloadUrl) {
      // Create a temporary link element and trigger download
      const link = document.createElement('a');
      link.href = resumeFile.downloadUrl;
      link.download = 'shreyas-hegde-resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return true;
    }
    return false;
  };

  const handleCommand = (cmd) => {
    if (!cmd.trim()) return;
    let newHistory = [...history, `${prompt} ${cmd}`];
    const trimmedCmd = cmd.trim();

    if (mode === "init" && trimmedCmd.toLowerCase() === "hello") {
      newHistory.push("🎉 Welcome! Type 'help' to see available commands.");
      setMode("commands");
    } else if (mode === "commands") {
      if (trimmedCmd === "help") {
        commandsList.forEach((c) => newHistory.push(`- ${c.cmd}: ${c.desc}`));
      } else if (trimmedCmd === "clear") {
        newHistory = [];
      } else if (trimmedCmd === "exit") {
        newHistory.push("👋 Goodbye! Refresh to start over.");
        setMode("init");
        setCwd("~");
      } else if (trimmedCmd === "ls") {
        const dir = getDirFromPath(cwd);
        if (!dir || !dir.contents) {
          newHistory.push("❌ Error reading directory.");
        } else {
          newHistory.push(
            Object.entries(dir.contents)
              .map(([name, info]) => (info.type === "dir" ? `${name}/` : name))
              .join("  ")
          );
        }
      } else if (trimmedCmd.startsWith("cd")) {
        const parts = trimmedCmd.split(/\s+/);
        if (parts.length < 2) {
          newHistory.push("❌ Usage: cd [directory]");
        } else {
          const target = parts[1];
          if (target === "..") {
            if (cwd === "~") {
              newHistory.push("❌ Already at root directory");
            } else {
              const parts = getPathParts(cwd);
              parts.pop();
              setCwd(parts.join("/") || "~");
            }
          } else {
            const dir = getDirFromPath(cwd);
            if (
              dir &&
              dir.contents &&
              dir.contents[target] &&
              dir.contents[target].type === "dir"
            ) {
              setCwd(cwd === "~" ? `~/${target}` : `${cwd}/${target}`);
            } else {
              newHistory.push(`❌ No such directory: ${target}`);
            }
          }
        }
      } else if (trimmedCmd.startsWith("cat")) {
        const parts = trimmedCmd.split(/\s+/);
        if (parts.length < 2) {
          newHistory.push("❌ Usage: cat [file]");
        } else {
          const fileName = parts[1];
          const dir = getDirFromPath(cwd);
          if (
            dir &&
            dir.contents &&
            dir.contents[fileName] &&
            dir.contents[fileName].type === "file"
          ) {
            newHistory.push(dir.contents[fileName].content);
          } else {
            newHistory.push(`❌ No such file: ${fileName}`);
          }
        }
      } else if (trimmedCmd === "pacman -Syu resume") {
        newHistory.push("⬇️ Downloading resume...");
        if (downloadResume()) {
          newHistory.push("✅ Resume download initiated!");
        } else {
          newHistory.push("❌ Resume download failed.");
        }
      } else if (trimmedCmd === "neofetch") {
        // Add animated neofetch output object to history
        newHistory.push({ neofetch: handleNeofetch() });
      } else {
        newHistory.push(
          `❌ Command not found: ${trimmedCmd}. Type 'help' for a list of commands.`
        );
      }
    } else {
      newHistory.push("⚠️ Invalid input. Please type 'hello' to start.");
    }

    commandHistory.current.push(trimmedCmd);
    setHistory(newHistory);
    setInput("");
    setHistoryIndex(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.current.length === 0) return;
      setHistoryIndex((prevIndex) => {
        const newIndex =
          prevIndex === null ? commandHistory.current.length - 1 : prevIndex - 1;
        if (newIndex < 0) return 0;
        setInput(commandHistory.current[newIndex]);
        return newIndex;
      });
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (commandHistory.current.length === 0) return;
      setHistoryIndex((prevIndex) => {
        if (prevIndex === null) return null;
        const newIndex = prevIndex + 1;
        if (newIndex >= commandHistory.current.length) {
          setInput("");
          return null;
        }
        setInput(commandHistory.current[newIndex]);
        return newIndex;
      });
    }
  };

  return (
    <div
      className="bg-gradient-to-br from-gray-900 to-black text-green-300 min-h-screen flex flex-col items-center justify-start p-4 font-mono"
      style={{ fontSize: "1rem" }}
      onClick={() => inputRef.current?.focus()}
    >
      <div
        className="w-full max-w-4xl bg-black bg-opacity-70 rounded-lg p-6 shadow-lg"
        style={{ minHeight: "70vh" }}
      >
        <div
          style={{
            whiteSpace: "pre",
            fontFamily: "monospace",
            userSelect: "text",
          }}
        >
          {history.map((line, index) =>
            typeof line === "string" ? (
              <div key={index}>{line}</div>
            ) : line.neofetch ? (
              // Render neofetch horizontally: ascii left, info right
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "2rem",
                  fontFamily: "'Courier New', Courier, monospace",
                }}
              >
                <div
                  style={{
                    lineHeight: 1.1,
                    whiteSpace: "pre",
                    color: "#00ff00",
                    fontWeight: "bold",
                    minWidth: "20ch",
                  }}
                >
                  {line.neofetch.map(({ asciiLine }, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      {asciiLine}
                    </motion.div>
                  ))}
                </div>
                <div
                  style={{
                    lineHeight: 1.4,
                    whiteSpace: "pre-wrap",
                    flexGrow: 1,
                    color: "white",
                  }}
                >
                  {line.neofetch.map(({ aboutLine }, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      {aboutLine}
                    </motion.div>
                  ))}
                </div>
              </div>
            ) : null
          )}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: "0.5rem",
            }}
          >
            <span
              style={{
                color: "#00ff00",
                marginRight: "0.5rem",
                fontWeight: "bold",
                userSelect: "none",
              }}
            >
              {prompt}
            </span>
            <input
              ref={inputRef}
              type="text"
              spellCheck="false"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#00ff00",
                fontFamily: "monospace",
                fontSize: "1rem",
                caretColor: "#00ff00",
                flexGrow: 1,
              }}
            />
          </div>
        </div>
      </div>
      <div ref={endRef} />
      <style>{`
        /* Blinking I-beam cursor on input */
        input {
  caret-color: #00ff00;
  caret-shape: bar;
  caret-width: 2px;
}

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Home;