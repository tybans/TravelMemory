import React from 'react'

function FeaturedCard() {
    return (
        <div>
            <div class="card">
                <div class="card-header">
                    Featured
                </div>
                <div class="card-body">
                    <h5 class="card-title">Trip Name</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Trip Type</h6>

                    <p class="card-text">Short Description: With supporting text below as a natural lead-in to additional content.</p>
                    <button href="/experiencedetails" class="btn btn-info">Click for More</button>
                </div>
            </div>
        </div>
    )
}

export default FeaturedCard