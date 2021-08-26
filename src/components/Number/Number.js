import React, { useState } from 'react'

import data from '../../data/data'

import './Number.css'

export default function Number () {
  const [minValue, setMinValue] = useState(1)
  const [maxValue, setMaxValue] = useState(50)
  const [randomNumber, setRandomNumber] = useState(0)
  const [loading, setLoading] = useState(true)

  const handleClear = () => {
    setRandomNumber(0)
  }

  const handleRandomNumber = () => {
    const randomTimeout = Math.round(Math.random() * 10000)
    const random = Math.round(Math.random() * (maxValue - minValue)) + minValue

    setTimeout(() => {
      filterData()
      setRandomNumber(random)
      setLoading(false)
    }, randomTimeout)

    setLoading(true)
    return random
  }

  const filterData = () => {
    if (loading) {
      return <p className='number-winner'>Sorteando ...</p>
    }

    const filter = data
      .filter(({ id }) => id === randomNumber)
      .map(({ id, name }) => (
        <p
          key={id}
          className='number-winner'
        >
          {name}
        </p>
      ))

    return filter
  }

  return (
    <main>

      <div className='number-area'>
        <p><span>{randomNumber}</span></p>
        {filterData()}
      </div>

      <div className='number-container'>
        <div>
          <p>Mínimo:</p>
          <input
            value={minValue}
            onChange={e => setMinValue(+e.target.value)}
            type='number'
          />
        </div>

        <div>
          <p>Máximo</p>
          <input
            value={maxValue}
            onChange={e => setMaxValue(+e.target.value)}
            type='number'
          />
        </div>
      </div>
      <button onClick={handleRandomNumber}>Sortear</button>
      <button onClick={handleClear}>Limpar</button>
    </main>
  )
}
