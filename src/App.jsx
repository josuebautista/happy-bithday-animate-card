import './App.css'
import Confetti from 'react-confetti';
import { useGlobalContext } from './utils/Context';
import { Card } from './components/Card';

const App = () => {
  const { width, height, ganyu, ereshkigal, miku, tlaloc } = useGlobalContext();
  return (
    <div className='h-screen w-full overflow-y-hidden bg-black'>
      <Confetti
        width={width}
        height={height}
      />
      <div className='absolute z-10 h-screen w-full text-center grid content-center bg-[rgba(0,0,0,0.3)] text-white text-5xl font-bold '>
      Feliz Cumpleaños<span className='bg-gradient-to-t from-green-400 via-blue-400 to-purple-600 bg-clip-text text-transparent'> Alan</span>
      </div>
      <div className='grid grid-cols-4 gap-2'>
        <div className="animate-marquee">
          {
            ganyu !== null && (
              ganyu.image.map((image) => (
                <Card key={image._key} url={image.asset._ref} />
              ))
            )
          }
        </div>
        <div className="animate-marquee3">
          {
            ereshkigal !== null && (
              ereshkigal.image.map((image) => (
                <Card key={image._key} url={image.asset._ref} />
              ))
            )
          }
        </div>
        <div className="animate-marquee2">
          {
            miku !== null && (
              miku.image.map((image) => (
                <Card key={image._key} url={image.asset._ref} />
              ))
            )
          }
        </div>
        <div className="animate-marquee4">
          {
            tlaloc !== null && (
              tlaloc.image.map((image) => (
                <Card key={image._key} url={image.asset._ref} />
              ))
            )
          }
        </div>
      </div>
    </div>
  )
}

export default App
