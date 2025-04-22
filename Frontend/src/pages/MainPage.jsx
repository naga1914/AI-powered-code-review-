// Main.jsx
import { useState, useEffect } from 'react'
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import axios from 'axios'
import { motion } from "framer-motion"
import { v4 as uuidv4 } from "uuid"
import Header from '../components/Navbar'
import "prismjs/components/prism-python"
import "prismjs/components/prism-java"
import "prismjs/components/prism-c"
import "prismjs/components/prism-cpp"
import "prismjs/components/prism-typescript"
import "highlight.js/styles/github-dark.css"
import "prismjs/themes/prism-tomorrow.css"
import "../App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faSpinner, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faTools } from '@fortawesome/free-solid-svg-icons';

const Main = () => {
  const [code, setCode] = useState(`function sum() {\n  return 1 + 1\n}`)
  const [review, setReview] = useState(``)
  const [fixedCode, setFixedCode] = useState("")
  const [loading, setLoading] = useState(false)
  const [fixing, setFixing] = useState(false)
  const [darkMode, setDarkMode] = useState(true)
  const [language, setLanguage] = useState("javascript")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [reviewHistory, setReviewHistory] = useState(() => {
    const saved = localStorage.getItem("reviewHistory")
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    prism.highlightAll()
  }, [language])


  async function reviewCode() {
    const response = await axios.post('http://localhost:3000/ai/get-review', { code })
    setReview(response.data)
  }

  async function fixCode() {
    const response = await axios.post('http://localhost:3000/ai/fix-code', { code })
    setReview(response.data)
  }

  useEffect(() => {
    localStorage.setItem("reviewHistory", JSON.stringify(reviewHistory))
  }, [reviewHistory])


  const filteredHistory = reviewHistory.filter(item =>
    item.code.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <Header
        language={language}
        setLanguage={setLanguage}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <motion.main
        initial={{ opacity: 0, x: sidebarOpen ? 250 : 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="main-content"
      >
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={setCode}
              highlight={code =>
                prism.highlight(code, prism.languages[language] || prism.languages.javascript, language)
              }
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%",
                backgroundColor: darkMode ? "#282c34" : "#f5f5f5",
                color: darkMode ? "#fff" : "#000"
              }}
            />
          </div>

          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <motion.div
              className="review"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={reviewCode}
            >
              Review
            </motion.div>

            <motion.div
              className="review"
              style={{ backgroundColor: "#4caf50" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={fixCode}
            >
              Fix Code
            </motion.div>
          </div>
        </div>

        <div className="right">
          {loading ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <FontAwesomeIcon icon={faSpinner} spin style={{ marginRight: '8px' }} />
              Reviewing code...
            </motion.p>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Markdown rehypePlugins={[rehypeHighlight]}>
                {review}
              </Markdown>
            </motion.div>
          )}

          {fixing ? (
            <p>
              <FontAwesomeIcon icon={faTools} style={{ marginRight: '8px', color: '#f97316' }} />
              Fixing code...
            </p>
          ) : fixedCode && (
            <div className="fixed-code">
              <h3>
                <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: '8px', color: 'green' }} />
                Fixed Code
              </h3>
              <Editor
                value={fixedCode}
                onValueChange={() => {}}
                highlight={code => prism.highlight(code, prism.languages[language] || prism.languages.javascript, language)}
                padding={10}
                style={{
                  fontFamily: '"Fira code", "Fira Mono", monospace',
                  fontSize: 14,
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  backgroundColor: darkMode ? "#1e1e1e" : "#f4f4f4",
                  color: darkMode ? "#fff" : "#000",
                  marginTop: "10px"
                }}
                readOnly
              />
            </div>
          )}
        </div>

        {sidebarOpen && (
          <motion.aside
            className="sidebar"
            initial={{ x: 250, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 250, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h2><FontAwesomeIcon icon={faHistory} style={{ cursor: 'pointer' }} title="Open History" /> History</h2>
              <button
                onClick={() => setReviewHistory([])}
                style={{ fontSize: "0.8rem", color: "#ccc", background: "transparent", border: "none", cursor: "pointer" }}
              >
                <FontAwesomeIcon icon={faTimes} style={{ cursor: 'pointer', color: 'red' }} title="Close History" /> Clear
              </button>
            </div>
            <input
              type="text"
              placeholder="Search history"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <ul className="chat-history-list">
              {filteredHistory.map((item) => (
                <li
                  key={item.id}
                  onClick={() => {
                    setCode(item.code)
                    setLanguage(item.language)
                    setReview(item.feedback)
                  }}
                >
                  {item.language} - {item.timestamp.split(",")[0]}
                </li>
              ))}
            </ul>
            <button
              onClick={() => {
                setCode("")
                setReview("")
                setLanguage("javascript")
              }}
              style={{ marginTop: "15px" }}
            >
              New Chat
            </button>
          </motion.aside>
        )}
      </motion.main>
    </div>
  )
}

export default Main
