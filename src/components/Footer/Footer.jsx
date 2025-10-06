import "./Footer.css";
import facebook_icon from "../../assets/facebook_icon.png";
import youtube_icon from "../../assets/youtube_icon.png";
import instagram_icon from "../../assets/instagram_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={youtube_icon} alt="" />
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Contact Us</li>
        <li>Corportae Info</li>
      </ul>
      <p className="copyright-text">© 2025 - Netflix </p>
    </div>
  );
};

export default Footer;
