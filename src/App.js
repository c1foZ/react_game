function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline bg-red-700 mt-4 flex items-center justify-center">
      Hello world!
      </h1>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="text-xl font-medium text-black">ChitChat</div>
        <p className="text-slate-500">You have a new message!</p>
      </div>
    </div>
  );
}

export default App;
