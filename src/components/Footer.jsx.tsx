import styled from "styled-components";

const Footer = styled.footer`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Semi-transparent background to match nav */
  padding: 20px;
  border-radius: 10px; /* Match the rounded style of the nav */
  box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.5); /* Shadow on top for depth */
  text-align: center; /* Center text for balance */
  margin-top: 40px; /* Space from content above */
  color: #fff; /* White text to match the overall layout */
  font-size: 1rem; /* Standard font size for readability */

  p {
    margin: 0; /* Remove default margin */
  }

  a {
    color: #87f1ff; /* Light blue link to match active nav link */
    text-decoration: none; /* No underline */
    margin-left: 5px;
    padding: 5px 10px;
    border-radius: 5px; /* Subtle rounding like nav links */
    transition: background-color 0.3s ease, color 0.3s ease; /* Smooth transitions */
  }

  a:hover {
    background-color: rgba(255, 255, 255, 0.2); /* Slight highlight on hover */
    color: #ffcc91; /* Match the hover color from nav */
  }

  /* Responsive: Ensure footer looks good on small screens */
  @media (max-width: 768px) {
    font-size: 0.9rem; /* Slightly smaller font on mobile screens */
  }
`;

export default Footer;
