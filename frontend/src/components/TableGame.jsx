import React, {useState} from 'react'

const TableGame = () => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    }
  return (
    <div className='text-white w-full h-screen'>
        <div className='flex justify-end'>
            <div className='mr-28 py-2 text-center text-black font-bold rounded-lg bg-orange-400 w-[200px]'>
                <button onClick={togglePopup}>Create a game</button>
            </div>
        </div>
        {showPopup && (
        <div className="fixed top-[-200px] left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-90">
          <div className="bg-gray-800 p-8 rounded-lg w-[500px]">
            <h2 className="text-orange-400 text-lg font-bold mb-4">Create a game</h2>
            <div className='my-4'>
                <p>Number of Players</p>
                <input className='text-black p-2' type='number' placeholder='Type a number'/>
            </div>
            <div className='my-4'>
                <p>Description</p>
                <input className='text-black p-2' type='text' placeholder='Type a text'/>
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
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td class="px-6 py-4 border-b border-gray-200">John Doe</td>
                    <td class="px-6 py-4 border-b border-gray-200">30</td>
                    <td class="px-6 py-4 border-b border-gray-200">Test Game 1</td>
                </tr>
                <tr>
                    <td class="px-6 py-4 border-b border-gray-200">Jane Smith</td>
                    <td class="px-6 py-4 border-b border-gray-200">25</td>
                    <td class="px-6 py-4 border-b border-gray-200">Test Game 2</td>
                </tr>
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default TableGame;