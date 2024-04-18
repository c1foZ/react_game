import React, {useState} from 'react'

const CreateGame = () => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    }
    
  return (
    <div>
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
    </div>
  )
}

export default CreateGame