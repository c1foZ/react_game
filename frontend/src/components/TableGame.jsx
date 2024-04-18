import React, {useEffect, useState} from 'react'
import CreateGame from './CreateGame'

const TableGame = () => {
    const [games, setGames] = useState(null)
    
    useEffect(() => {
        const fetchGames = async () => {
            const response = await fetch('/api/games/')
            const json = await response.json();
            
            if(response.ok){
                setGames(json)
            }
        }
        fetchGames()
    }, [])

    const deleteGame = async (id) => {
        const response = await fetch(`/api/games/${id}`,{
            method: 'DELETE'
        })
        const json = response.json();

        if (response.ok) {
            console.log(json);
            setGames(games.filter((game) => game._id !== id));
        }
      };

  return (
    <div className='text-white w-full h-screen'>
        <CreateGame />
        <div class="container mx-auto">
            <table class="min-w-full bg-gray-950 my-6">
                <thead>
                <tr>
                    <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 tracking-wider">Name</th>
                    <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 tracking-wider">Players</th>
                    <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 tracking-wider">Description</th>
                    <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 tracking-wider"></th>
                </tr>
                </thead>
                <tbody>
                {games && games.map((game) => (
                    <tr>
                        <td class="px-6 py-4 border-b border-gray-200">{game.title}</td>
                        <td class="px-6 py-4 border-b border-gray-200">{game.players}</td>
                        <td class="px-6 py-4 border-b border-gray-200">{game.description}</td>
                        <td class="px-6 py-4 border-b border-gray-200">
                            <button onClick={() => deleteGame(game._id)}>X</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default TableGame;