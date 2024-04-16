import React, {useEffect, useState} from 'react'

const TableGame = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [games, setGames] = useState(null)

    const togglePopup = () => {
        setShowPopup(!showPopup);
    }
    
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
        <div className='container flex justify-end mx-auto'>
            <div className='py-2 text-center text-black font-bold rounded-lg bg-orange-400 w-[200px]'>
                <button onClick={togglePopup}>Create a game</button>
            </div>
        </div>
        {showPopup && (
        <div className="fixed top-[-200px] left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-90">
          <div className="bg-gray-800 p-8 rounded-lg w-[500px]">
            <h2 className="text-orange-400 text-lg font-bold mb-4">Create a game</h2>
            <div className='my-4'>
                <p className='my-2'>Number of Players</p>
                <input className='text-black p-2 rounded-xl' type='number' placeholder='Type a number'/>
            </div>
            <div className='my-4'>
                <p className='my-2'>Description</p>
                <textarea className='text-black p-2 w-full min-h-28 max-h-52 rounded-xl' type='text' placeholder='Type a text'/>
            </div>
            <button className='mr-6 font-bold bg-orange-400 text-black uppercase p-2 rounded' onClick={togglePopup}>Submit</button>
            <button onClick={togglePopup}>Close</button>
          </div>
        </div>
        )}

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