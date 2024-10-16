import { Outlet, Link } from 'react-router-dom';
import styled from 'styled-components';
import Footer from "./Footer.jsx.tsx";

// Define styled-components if needed
const Nav = styled.nav`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Semi-transparent background to match background image */
  padding: 10px 20px;
  border-radius: 10px; /* Match the rounded style of other elements */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5); /* Add subtle shadow for depth */
  margin-bottom: 20px;

  ul {
    list-style: none;
    display: flex;
    justify-content: center; /* Center items in the nav */
    gap: 30px; /* Increase space between links for readability */
  }

  li {
    margin: 0;
  }

  a {
    color: #fff; /* Use white text to match the rest of the layout */
    font-size: 1.2rem; /* Slightly increase font size for better visibility */
    text-decoration: none;
    padding: 10px 15px; /* Add padding for clickability */
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.1));
    border-radius: 5px; /* Subtle rounding to match the button style */
    transition: background-color 0.3s ease, color 0.3s ease; /* Smooth transitions */
  }

  a:hover {
    background-color: rgba(255, 255, 255, 0.2); /* Add slight highlight on hover */
    color: #ffcc91; /* Match the color scheme of the buttons */
  }

  a.active {
    background-color: #87f1ff; /* Highlight active link with gradient from h1 */
    color: #0085a3;
    font-weight: bold; /* Make the active link stand out */
  }
`;

const Layout: React.FC = () => {
    return (
        <>
            <Nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/quiz">Quiz</Link>
                    </li>
                </ul>
            </Nav>
            <main>
                <Outlet /> {/* Renders the matched child route component */}
            </main>

            <Footer>
                <p>&copy; {new Date().getFullYear()} Quiz App. All rights reserved.
                    <a href="https://yourwebsite.com">Visit Us</a>
                </p>
            </Footer>

        </>
    );
};
export default Layout
