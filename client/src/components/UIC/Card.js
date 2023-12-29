import React from 'react'
import { useNavigate } from 'react-router-dom'

function Card(props) {
    const navigate = useNavigate()
    const visitDetails = ()=>{
        navigate(`/experiencedetails/${props.id}`)
    }
    return (
        <div >
            <div class="card" style={{ margin: "1rem"}}>
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">{props.tripType}</h6>
                    <p class="card-text">{props.description}</p>
                    <button class="card-link btn btn-success" onClick={visitDetails}>Click For More</button>
                </div>
            </div>
        </div>
    )
}

export default Card