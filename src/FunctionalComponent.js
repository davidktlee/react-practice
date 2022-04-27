import React, { useState, useEffect } from 'react'

export default function FunctionalComponent() {
  const [date, setDate] = useState(new Date())
  const tick = () => {
    setDate(new Date())
  }
  useEffect(() => {
    const interval = setInterval(() => tick(), 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])
  return (
    <div>
      <h1>Jello,world</h1>
      <h2>it it {date.toLocaleDateString()}</h2>
    </div>
  )
}
