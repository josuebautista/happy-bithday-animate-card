import './App.css'
import Confetti from 'react-confetti';
import { useGlobalContext } from './utils/Context';
import { Card } from './components/Card';

const App = () => {
  const { width, height, ganyu, ereshkigal, miku, tlaloc } = useGlobalContext();
  console.log(ganyu);
  return (
    <div className='absolute inset-0 w-full h-screen bg-red-200 -z-10'>
      {/* <Confetti width={width} height={height} /> */}
      <div className="top-0 bg-blue-100 z-0 h-60 grid-flow-row overflow-x-visible">
        {
          ganyu !== null && (
            ganyu.image.map((image) => (
              <Card key={image._key} url={image.asset._ref}/>
            ))
          )
        }
      </div>
      <div className="absolute top-1/4 w-full bg-green-100 z-0 h-60">
        .
      </div>
      <div className='absolute top-1/3 pt-20 w-full text-center bg-transparent font-extrabold text-7xl z-10'>
        Home Works<span className='bg-gradient-to-r from-green-600 via-blue-500 to-purple-700 bg-clip-text text-transparent'> testing</span>
      </div>
      <div className="absolute bottom-1/4 w-full bg-yellow-100 z-0 h-60">
        .
      </div>
      <div className="absolute bottom-0 w-full bg-violet-100 z-0 h-60">
        .
      </div>
    </div>
  )
}

export default App
