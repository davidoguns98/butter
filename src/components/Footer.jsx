import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
function Footer() {
  return (
    <footer className="footer">
      <ul>
        <li>
          <a href="linkedin.com/in/david-ogungbemi-085377249">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="github.com/davidoguns98">
            <FaGithub />
          </a>
        </li>
        <li>
          <p>Davidoguns98@gmail.com</p>
        </li>
      </ul>
      <p>&copy; copyright 2024</p>
    </footer>
  );
}
export default Footer;
