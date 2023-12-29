import React from 'react'

function Card() {
    return (
        <div>
            <div class="card" style={{width: "18rem", margin: "1rem"}}>
                <div class="card-body">
                    <h5 class="card-title">Trip Title</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Trip Type</h6>
                    <p class="card-text">Short Description: Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button href="/experiencedetails" class="card-link btn btn-success">Click For More</button>
                </div>
            </div>
        </div>
    )
}

export default Card