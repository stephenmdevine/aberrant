import axios from "axios";
import { createContext, useState } from "react";

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
    const [ gameCharacter, setGameCharacter ] = useState({
        name: '',
        player: '',
        novaName: '',
        concept: '',
        nature: '',
        allegiance: '',
        description: '',
        attributePoints: 15,
        abilityPoints: 23,
        backgroundPoints: 7,
        bonusPoints: 15,
        novaPoints: 30,
        experiencePoints: 0
    });

    const [ gameCharacters, setGameCharacters ] = useState([]);

    const createGameCharacter = async (GameCharacterData) => {
        try {
            const response = await axios.post('http://localhost:8080/characters/new', GameCharacterData);
            setGameCharacter(response.data);
        }   catch (e) {
            console.error("Error updating character: ", e);
        }
    };

    const loadGameCharacters = async () => {
        try {
            const result = await axios.get('http://localhost:8080/characters');
            setGameCharacters(result.data);
            console.log('Characters loaded:', result.data);
        }   catch (e) {
            console.error('Error loading characters: ', e);
        }
    }

    console.log('CharacterProvider initialized:', gameCharacter);

    return (
        <CharacterContext.Provider value={{ gameCharacter, setGameCharacter, gameCharacters, setGameCharacters, createGameCharacter, loadGameCharacters }}>
            {children}
        </CharacterContext.Provider>
    );
};

export default CharacterContext;
