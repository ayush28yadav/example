import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
//import Heading from './components/heading'
import Card from './components/Cars'

function App() {
 const [ carData, setCarData] = useState([
    {
      model: "BMW",
      description: "BMW is a German luxury vehicle, motorcycle, and engine manufacturing company founded in 1916. It is known for its performance and luxury vehicles."
    },
    {
      model: "Audi",
      description: "Audi is a German automobile manufacturer that designs, engineers, produces, markets and distributes luxury vehicles. Audi is a member of the Volkswagen Group."
    },
    {
      model: "Mercedes-Benz",
      description: "Mercedes-Benz is a German global automobile marque and a division of Daimler AG. The brand is known for luxury vehicles, buses, coaches, and trucks."
    }
  ]);

  return (
    <div className="app-wrapper">
   {/* <Heading/> */}
   {carData.map((car, index) => (
      <Card key={index} model={car.model} description={car.description} />
    ))}
    </div>
  )
}

export default App
