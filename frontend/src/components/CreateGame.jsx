import React, { useState } from 'react'

const CreateGame = () => {
  const [showPopup, setShowPopup] = useState(false)
  const [title, setTitle] = useState('')
  const [players, setPlayers] = useState('')
  const [description, setDescription] = useState('')

  const togglePopup = () => {
    setShowPopup(!showPopup)
  }

  const handleSubmit = async e => {
    const response = await fetch('http://localhost:4000/api/games', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        players,
        description,
      }),
    })

    if (response.ok) {
      console.log(response.json())
    }

    setTitle('')
    setPlayers('')
    setDescription('')
    togglePopup()
  }

  return (
    <div>
      <div className='container flex justify-end mx-auto'>
        <div className='py-2 text-center text-black font-bold rounded-lg bg-orange-400 w-[200px]'>
          <button onClick={togglePopup}>Create a game</button>
        </div>
      </div>
      {showPopup && (
        <div className='fixed top-[-200px] left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-90'>
          <div className='bg-gray-800 p-8 rounded-lg w-[500px]'>
            <h2 className='text-orange-400 text-lg font-bold mb-4'>
              Create a game
            </h2>
            <form onSubmit={handleSubmit}>
              <div className='my-4'>
                <p className='my-2'>Title</p>
                <input
                  className='text-black p-2 rounded-xl'
                  type='text'
                  placeholder='Type a title'
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />
              </div>
              <div className='my-4'>
                <p className='my-2'>Number of Players</p>
                <input
                  className='text-black p-2 rounded-xl'
                  type='number'
                  placeholder='Type a number'
                  value={players}
                  onChange={e => setPlayers(e.target.value)}
                />
              </div>
              <div className='my-4'>
                <p className='my-2'>Description</p>
                <textarea
                  className='text-black p-2 w-full min-h-28 max-h-52 rounded-xl'
                  placeholder='Type a description'
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                />
              </div>
              <button
                type='submit'
                className='mr-6 font-bold bg-orange-400 text-black uppercase p-2 rounded'
              >
                Submit
              </button>
              <button type='button' onClick={togglePopup}>
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default CreateGame
