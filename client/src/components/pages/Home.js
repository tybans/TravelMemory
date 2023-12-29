import React from 'react'
import Card from '../UIC/Card'
import FeaturedCard from '../UIC/FeaturedCard'

function Home() {
  return (
    <div style={{ margin: "1rem" }}>
        <FeaturedCard/>
        <Card/>
    </div>
  )
}

export default Home