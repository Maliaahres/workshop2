import styled from "styled-components";
import logo from '../assets/logo.png'; // Adjust the path as necessary

const Footer = styled.footer`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 1rem;
  margin-top: 40px;
  display: flex; /* Use flexbox for layout */
  justify-content: space-between; /* Space between text/links and logo */
  align-items: center; /* Center vertically */

  p {
    margin: 0;
  }

  a {
    color: #87f1ff;
    text-decoration: none;
    margin-left: 5px;
    padding: 5px 10px;
    border-radius: 5px;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  a:hover {
    background-color: rgba(255, 255, 255, 0.2);
    color: #ffcc91;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Slightly smaller font on mobile screens */
  }
`;

const FooterTextLinks = styled.div`
  display: flex;
  flex-direction: column; /* Stack text and links vertically */
`;

const FooterLinks = styled.div`
  margin-top: 5px; /* Adds some spacing above the links */
  display: flex; /* Use Flexbox for layout */
  justify-content: center; /* Center-align the links horizontally */
  align-items: center; /* Center-align the links vertically */

  a {
    margin: 0 10px; /* Add some margin to space links out */
  }
`;


const FooterLogo = styled.div`
  a {
    display: inline-block; /* Makes the anchor tag surrounding the logo take up only the space of the image */
    transition: transform 0.3s ease; /* Add transition for the transform effect */
  }

  img {
    width: 150px; /* Adjust the size as needed */
    height: auto; /* Maintains aspect ratio */
    transition: opacity 0.3s ease; /* Add transition for the opacity effect */
  }

  /* Add hover effect on the anchor tag */
  a:hover img {
    opacity: 0.8; /* Slightly fade the image on hover */
    transform: scale(1.05); /* Slightly enlarge the image on hover */
  }
`;

const FooterComponent = () => (
    <Footer>
        <FooterTextLinks>
            <p>&copy; {new Date().getFullYear()} Tous droits réservés Équipe ClicknSafe</p>
            <FooterLinks>
                <a href="https://yourwebsite.com/contact">Nous contacter</a> |
                <a href="https://yourwebsite.com/legal">Mentions légales</a> |
                <a href="https://yourwebsite.com/follow">Suivez-nous</a>
            </FooterLinks>
        </FooterTextLinks>
        <FooterLogo>
            <a href="https://yourwebsite.com">
                <img src={logo} alt="ClicknSafe" />
            </a>
        </FooterLogo>
    </Footer>
);

export default FooterComponent;
