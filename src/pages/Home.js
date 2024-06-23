import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Home = () => {

  const [characters, setCharacters] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadCharacters();
  }, []);

  const loadCharacters = async () => {
    const result = await axios.get('http://localhost:8080/characters');
    setCharacters(result.data);
  };

  return (
    <div>
      <h1>Welcome to the Character Creator</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>Character Name</th>
              <th>Player Name</th>
              <th>Baseline Creation</th>
              <th>Nova Creation</th>
              <th>Character Advancement</th>
            </tr>
          </thead>
          <tbody>
            {characters.map((character, index) => (
              <tr>
                <td>{character.name}</td>
                <td>{character.player}</td>
                <td>
                    <button>Add Attributes</button>
                    <button>Add Abilities</button>
                    <button>Add Backgrounds</button>
                    <button>Spend Bonus Points</button>
                </td>
                <td>
                    <button>Spend Nova Points</button>
                </td>
                <td>
                    <button>View Character</button>
                    <button>Spend Experience Points</button>
                </td>
              </tr>

            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;