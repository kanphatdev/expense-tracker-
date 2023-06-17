import Graph from './components/Graph';
import './App.css';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <div className='container mx-auto max-w-6xl text-center drop-shadow-lg'>
        <h1 className='capitalize  rounded-full text-4xl py-8 mb-10 bg-slate-800 text-white'>
          exspense tracker
        </h1>
        {/* grid */}
        <div className='grid md:grid-cols-2 gap-4'>
          {/* chart*/}
          <Graph>

          </Graph>
          {/* form */}
          <Form/>
        </div>
      </div>
    </div>
  );
}

export default App;