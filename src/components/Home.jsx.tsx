import React from 'react';
import styled from 'styled-components';
import homeGif from './../assets/home-gif.gif'; // Update with the correct path to your image

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  max-width: 1200px;
  width: 100%;
  flex-direction: column; /* Stack the sections vertically */
  padding: 20px; /* Optional: add padding for better spacing */
`;

const TextSection = styled.div`
  text-align: left;
  padding: 20px;
`;

const Header = styled.h1`
  font-size: 2.5rem; /* Increase header font size */
`;

const Paragraph = styled.p`
  font-size: 1.25rem; /* Increase paragraph font size */
  line-height: 1.6; /* Increase line height for better readability */
`;

const ImageSection = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 400px;
  border-radius: 8px;
`;

const Features = styled.div`
  margin-top: 40px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap; /* Allow cards to wrap if necessary */
`;

const FeatureCard = styled.div`
  display: flex;
  flex-direction: column; /* Stack title and description vertically */
  align-items: center; /* Center align content */
  justify-content: center; /* Center content */
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  max-width: 200px; /* Set max-width to keep all cards the same size */
  height: 200px; /* Set a fixed height */
  background-color: rgba(0, 0, 0, 0.7); /* Transparent black background */
  color: white; /* Change text color to white for better contrast */
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem; /* Increase feature title font size */
  margin-bottom: 10px; /* Add some space below the title */
`;

const FeatureDescription = styled.p`
  font-size: 1rem; /* Increase feature description font size */
`;


const Testimonials = styled.div`
    margin-top: 40px;
    text-align: center;
`;

const Testimonial = styled.blockquote`
    font-size: 1.1rem; /* Increase testimonial font size */
    font-style: italic;
    margin: 10px 0;
`;

const Home: React.FC = () => {
    return (
        <Container>
            <TextSection>
                <Header>Bienvenue sur l'application Click n Safe</Header>
                <Paragraph>Il s'agit d'une application de quiz simple qui vous permet de tester vos connaissances !</Paragraph>
                <Paragraph>Cliquez sur « Quiz » dans le menu pour démarrer un quiz.</Paragraph>
                <Paragraph>Lancez-vous un défi, voyez combien de réponses vous pouvez obtenir et partagez vos résultats avec vos amis !</Paragraph>
            </TextSection>

            <ImageSection>
                <StyledImage src={homeGif} alt="Quiz" />
            </ImageSection>

            <Features>
                <h2 style={{ fontSize: '2rem', width: '100%' }}>Fonctionnalités</h2> {/* Increase section title font size */}
                <FeatureCard>
                    <FeatureTitle>Variété de quiz</FeatureTitle>
                    <FeatureDescription>Explorez divers sujets et catégories.</FeatureDescription>
                </FeatureCard>
                <FeatureCard>
                    <FeatureTitle>Suivi des scores</FeatureTitle>
                    <FeatureDescription>Visualisez vos progrès et vos scores.</FeatureDescription>
                </FeatureCard>
                <FeatureCard>
                    <FeatureTitle>Partagez vos résultats</FeatureTitle>
                    <FeatureDescription>Défiez vos amis et partagez vos succès.</FeatureDescription>
                </FeatureCard>
            </Features>

            <Testimonials>
                <h2 style={{ fontSize: '2rem' }}>Témoignages</h2> {/* Increase section title font size */}
                <Testimonial>
                    "Une application géniale ! J'ai adoré les quizzes et j'ai appris beaucoup de nouvelles choses."
                </Testimonial>
                <Testimonial>
                    "Les défis sont amusants et le partage avec mes amis ajoute une touche supplémentaire !"
                </Testimonial>
            </Testimonials>
        </Container>
    );
};

export default Home;
