import React, { Component, useRef, useState } from 'react'

export default class Grid extends Component {
  render() {
    const valorE = useRef();
    // const [estado, setestado] = useState("");
    // const [Lenguaje, setLenguaje] = useState(second)

    const Est = () => {
      
    }


    return (
      <>
        <div className='general'>
          <h2 style={{ 
            display: "flex", 
            justifyContent: "center" }}>Automatas Y Lenguajes Formales</h2>
          <h3>Estados</h3>
          <input
            className='Estados'
            placeholder='Ingresa tus estados delimitados por ","'
            type='text'
            ref={valorE}
            onChange={Est}
          />
          <h3>Lenguaje</h3>
          <input
            className='Estados'
            placeholder='Ingresa tus simbolos del lenguaje delimitados ","' type='text' />
        </div>
      </>
    )
  }
}
