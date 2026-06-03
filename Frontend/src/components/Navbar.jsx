import EllipsisMenu from "./EllipsiMenu"
import { UserButton, useUser } from '@clerk/clerk-react';
import '../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faTimes, faFolderOpen } from '@fortawesome/free-solid-svg-icons';


// components/Navbar.jsx
const Header = ({ language, setLanguage, darkMode, setDarkMode, sidebarOpen, setSidebarOpen }) => {
  const { user } = useUser();
  return (
    <header className="header">
      <div className="header-left">
      <div className="logo">
    <img src="/logo.webp" alt="AI Code Reviewer Logo" className="logo-image" />
    <span className="name">AI Code Reviewer</span>
    </div>
      </div>
      <div className="header-right">
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="c">C</option>
          <option value="cpp">C++</option>
          <option value="typescript">TypeScript</option>
        </select>
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
  {darkMode ? (
    <>
      <FontAwesomeIcon icon={faSun} style={{ marginRight: '8px', color: '#facc15' }} />
      Light Mode
    </>
  ) : (
    <>
      <FontAwesomeIcon icon={faMoon} style={{ marginRight: '8px', color: '#4b5563' }} />
      Dark Mode
    </>
  )}
</button>

<button className="history-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
  {sidebarOpen ? (
    <>
      <FontAwesomeIcon icon={faTimes} style={{ marginRight: '8px', color: 'red' }} />
      Close History
    </>
  ) : (
    <>
      <FontAwesomeIcon icon={faFolderOpen} style={{ marginRight: '8px', color: '#3b82f6' }} />
      Open History
    </>
  )}
</button>

        <EllipsisMenu />
      </div>
      <div className="user-right">
        <UserButton afterSignOutUrl="/" appearance={{ elements: { userButtonAvatarBox: 'clerk-user-button' } }} />
      </div>
    </header>
  )
}

export default Header
