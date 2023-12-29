import React, { useEffect, useState } from 'react'
import Card from '../UIC/Card'
import FeaturedCard from '../UIC/FeaturedCard'

// Axios is a popular JavaScript library used for making HTTP requests from browsers or Node.js. It is a promise-based HTTP client that provides a simple and clean interface for sending and handling HTTP requests. Axios is commonly used in web development to interact with APIs, fetch data from servers, and perform other asynchronous operations related to HTTP.
import axios from 'axios';
import { baseUrl } from '../../url';

function Home() {
  // make an axios call and store the fetched data from API call into our data value
  const [data, setData] = useState();

  // useEffect accepts two param:- a callback and an array
  useEffect(() => {
    axios.get(`${baseUrl}/trip/getTrip`).then(res => setData(res.data))
  }, [])
  console.log(data);

  if (data) {
    return (
      <div style={{ margin: "1rem" }}>
        {/* map functionality to map the data */}
        {
          data.map((e) => {
            if (e.featured) {
              return (<FeaturedCard
                title={e.tripName}
                tripType={e.tripType}
                description={e.shortDescription}
                id={e._id}
              />)
            }
            else {
              return null
            }
          })
        }
        {
          data.map((e) => {
            if (!e.featured) {
              return (<Card
                title={e.tripName}
                tripType={e.tripType}
                description={e.shortDescription}
                id={e._id}
              />)
            }
            else {
              return null
            }
          })
        }




      </div>
    )
  }
  else {
    return (
      <>
        Loading...
      </>
    )
  }


}

export default Home