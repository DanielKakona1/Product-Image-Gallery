import React, { useState } from 'react'
import './App.css'

function App() {
  const [line1, setLine1] = useState(true)
  const [line2, setLine2] = useState(false)
  const [line3, setLine3] = useState(false)
  const [line4, setLine4] = useState(false)
  const [line5, setLine5] = useState(false)

  const myFunction = (smallImg: number) => {
    setLine1(false)
    setLine2(false)
    setLine3(false)
    setLine4(false)
    switch (smallImg) {
      case 1:
        setLine1(true)
        break
      case 2:
        setLine2(true)
        break
      case 3:
        setLine3(true)
        break
      case 4:
        setLine4(true)
        break
      case 5:
        setLine5(true)
        break
      default:
        setLine1(true)
    }
  }

  const img = line1
    ? require('./assets/gallery-1.jpg')
    : line2
    ? require('./assets/gallery-2.jpg')
    : line3
    ? require('./assets/gallery-3.jpg')
    : line4
    ? require('./assets/gallery-4.jpg')
    : require('./assets/gallery-1.jpg')
  return (
    <div className="product">
      <div className="product-small-img">
        <img
          src={require('./assets/gallery-1.jpg')}
          alt=""
          onClick={() => myFunction(1)}
        />
        <img
          src={require('./assets/gallery-2.jpg')}
          alt=""
          onClick={() => myFunction(2)}
        />
        <img
          src={require('./assets/gallery-3.jpg')}
          alt=""
          onClick={() => myFunction(3)}
        />
        <img
          src={require('./assets/gallery-4.jpg')}
          alt=""
          onClick={() => myFunction(4)}
        />
        <img
          src={require('./assets/gallery-1.jpg')}
          alt=""
          onClick={() => myFunction(5)}
        />
      </div>
      <div className="img-container">
        <img src={img} alt="" onClick={() => myFunction} />
      </div>
    </div>
  )
}

export default App
