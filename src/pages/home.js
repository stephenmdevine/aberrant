import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import CharacterContext from '../context/CharacterContext';

export default function Home() {

  const [ gameCharacters, setGameCharacters, loadGameCharacters ] = useContext(CharacterContext);
  console.log('CharacterContext in Home:', character);

  const { id } = useParams();

  useEffect(() => {
    loadGameCharacters();
  }, []);

  return (
    <div className='container'>
      <div className='py-4'>
          <h1>Welcome to the Character Creator</h1>
          <div>
            <Link to={'/basic-info-form'}>Create New Character</Link>
          </div>
          <div>
            <table className='table border shadow'>
              <thead>
                <tr>
                  <th scope='col'>Character Name</th>
                  <th scope='col'>Player Name</th>
                  <th scope='col'>Baseline Creation</th>
                  <th scope='col'>Nova Creation</th>
                  <th scope='col'>Character Advancement</th>
                </tr>
              </thead>
              <tbody>
                {gameCharacters.map((character, index) => (
                  <tr>
                    <td>{character.name}</td>
                    <td>{character.player}</td>
                    <td>
                      <Link className='btn' to={`/`}>Add Attributes</Link>
                      <Link className='btn' to={`/`}>Add Abilities</Link>
                      <Link className='btn' to={`/`}>Add Backgrounds</Link>
                      <Link className='btn' to={`/`}>Spend Bonus Points</Link>
                    </td>
                    <td>
                      <Link className='btn' to={'/'}>Spend Nova Points</Link>
                    </td>
                    <td>
                      <Link className='btn' to={'/'}>View Character</Link>
                      <Link className='btn' to={'/'}>Spend Experience Points</Link>
                    </td>
                  </tr>

                ))}
              </tbody>
            </table>
          </div>
      </div>
    </div>
  );
}
