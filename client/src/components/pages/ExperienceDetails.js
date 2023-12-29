import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { baseUrl } from '../../url'

function ExperienceDetails(props) {
    const {id} = useParams()
    const [data, setData] = useState()

    useEffect(() => {
        axios.get(`${baseUrl}/trip/${id}`)
        .then(res => setData(res.data))
        //console.log(data);
    }, [id])

    if(data){


    return (
        <div style={{ margin: "1rem" }}>
            <div class='row'>
                <div class='col-2'></div>
                <div class='col-8' style={{ textAlign: "center" }}>
                    <h1>{data.tripName}</h1>
                </div>
                <div class='col-2'></div>
            </div>
            <br></br>

            <div class='row'>
                <div class='col-2'></div>
                <div class='col-8' style={{ textAlign: "center" }}>
                    <img src={data.image} alt='image here'></img>
                </div>
                <div class='col-2'></div>
            </div>
            <br></br>

            <div class='container'>
                <div class='row'>
                    <div class='col-3'></div>
                    <div class='col-6 border bg-light'>
                        <div class='row border bg-light'>
                            <div class='col-12'>
                                Name of Hotels: {data.nameOfHotels}
                            </div>
                        </div><br></br>

                        <div class='row border bg-light'>
                            <div class='col-6'>
                                Start Date: {data.startDateOfJourney}
                            </div>
                            <div class='col-6'>
                                End Date: {data.endDateOfJourney}
                            </div>
                        </div><br></br>

                        <div class='row border bg-light'>
                            <div class='col-12'>
                                Places Visited: {data.placesVisited}
                            </div>
                        </div><br></br>

                        <div class='row border bg-light'>
                            <div class='col-12'>
                                Total Cost: {data.totalCost}
                            </div>
                        </div><br></br>

                        <div class='row border bg-light'>
                            <div class='col-12'>
                                Trip Type: {data.tripType}
                            </div>
                        </div>
                    </div>
                    <div class='col-3'></div>
                </div>
            </div>
            <br></br>

            <div class='row'>
                <div class='col-1'></div>
                <div class='col-10' style={{textAlign:"justify"}}>
                    {data.experience}
                </div>
                <div class='col-1'></div>
            </div>

        </div>
    )
    }
    else{
        return(
            <>Loading...</>
        )
    }
}

export default ExperienceDetails