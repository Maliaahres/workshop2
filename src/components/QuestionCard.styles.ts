import styled from 'styled-components';

// Wrapper component with light orange background and darker border
export const Wrapper = styled.div`
  max-width: 1100px;
  background: #fff4e6; /* Very light orange background */
  border-radius: 10px;
  border: 2px solid #d88a00; /* Darker orange border */
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;

  p {
    font-size: 1rem;
    color: #000000; /* Black text for all paragraphs */
  }
`;

type ButtonWrapperProps = {
    $correct: boolean;
    $userClicked: boolean;
};

// ButtonWrapper component with button colors based on answer correctness
export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ $correct, $userClicked }) =>
            $correct
                    ? 'linear-gradient(90deg, #56FFA4, #59BC86)' // Green gradient for correct
                    : !$correct && $userClicked
                            ? 'linear-gradient(90deg, #FF5656, #C16868)' // Red gradient for wrong
                            : 'linear-gradient(90deg, #FFCC80, #FFDE80)'}; // Default gradient (optional)
    border: 3px solid #ffffff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #000000; /* Black text for all buttons */
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
`;
