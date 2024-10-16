// src/components/Home.jsx
import React from 'react';
import quizImage from './../images/home-background.png';

const Home: React.FC = () => {
    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '20px' }}>
                <div style={{ flex: 1, marginRight: '20px' }}>
                    <h1>Bienvenue sur l'application click n safe</h1>
                    <p>Il s'agit d'une application de quiz simple qui vous permet de tester vos connaissances !</p>
                    <p>Cliquez sur « Quiz » dans le menu pour démarrer un quiz.</p>
                    <p>Lancez-vous un défi, voyez combien de réponses vous pouvez obtenir et partagez vos résultats avec vos amis !</p>
                </div>

                <div style={{ flex: 1 }}>
                    <img
                        src={quizImage}
                        alt="Quiz"
                        style={{ width: '100%', height: 'auto', maxWidth: '400px', borderRadius: '8px' }}
                    />
                </div>
            </div>
        </>
    );
};

export default Home;
