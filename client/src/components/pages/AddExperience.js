import React from 'react'

function AddExperience() {
    return (
        <div style={{ margin: "1rem" }}>
            <div class="mb-3">
                <label for="tripName" class="form-label">Trip Name</label>
                <input type="text" class="form-control" id="tripName" placeholder='Trip Name Here' />
            </div>

            <div class="mb-3">
                <label for="tripDate" class="form-label">Trip Date</label>
                <div class='row' >
                    <div class='col-5' style={{ marginLeft: "1rem" }}>
                        <label for="startDate" class="form-label"><small>Start Date</small></label>
                        <input type="date" class="form-control" id="startDate" />
                    </div>
                    <div class='col-5' style={{ marginLeft: "1rem" }} >
                        <label for="endtDate" class="form-label"><small>End Date</small></label>
                        <input type="date" class="form-control" id="endtDate" />
                    </div>
                </div>
            </div>

            <div class="mb-3">
                <label for="nameOfHotels" class="form-label">Hotel Name</label>
                <input type="text" class="form-control" id="nameOfHotels" placeholder='Hotel Name Here' />
            </div>

            <div class="mb-3">
                <div class='row'>
                    <div class='col-5' style={{ marginLeft: "1rem" }}>
                        <label for="tripType" class="form-label">Trip Type</label>
                        <select class="form-select" id='tripType' aria-label="tripType">
                            <option selected value="backpacking">Backpacking</option>
                            <option value="leisure">Leisure</option>
                            <option value="business">Business</option>
                        </select>
                    </div>
                    <div class='col-5' style={{ marginLeft: "1rem" }}>
                        <label for="totalCost" class="form-label">Total Cost</label>
                        <input type="number" class="form-control" id="totalCost" placeholder='0000' />
                    </div>
                </div>
            </div>

            <div class="mb-3">
                <label for="placesVisited" class="form-label">Places Visited</label>
                <input type="text" class="form-control" id="placesVisited" placeholder='Add the Places you visited' />
            </div>

            <div class="mb-3">
                <label for="featured" class="form-label">Featured Trip</label>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="true" id="true" />
                    <label class="form-check-label" for="true">
                        True
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="false" id="false" checked />
                    <label class="form-check-label" for="false">
                        False
                    </label>
                </div>

                {/* <div class='form-check'>
                    <input type='radio' name='true' class='form-check-input' id='true' value={true}></input>
                    <label class='form-check-label' for='true'>True</label>
                </div> */}
                {/* <div class='form-check'>
                    <input type='radio' name='false' class='form-check-input' id='false' value={false}></input>
                    <label class='form-check-label' for='false'>False</label>
                </div> */}
            </div>

            <div class="mb-3">
                <label for="image" class="form-label">Image Link</label>
                <input type="text" class="form-control" id="image" placeholder='Image Link Here' />
            </div>

            <div class="mb-3">
                <label for="shortDescription" class="form-label">Short Description</label>
                <textarea class="form-control" rows='2' id="shortDescription" placeholder='Short Description Here' />
            </div>

            <div class="mb-3">
                <label for="experience" class="form-label">Experience</label>
                <textarea class="form-control" rows='5' id="experience" placeholder='write your experience  Here' />
            </div>

            <div class="mb-3" style={{textAlign:"center"}}>
                <button type='submit' class='btn btn-success'>Submit</button>
            </div>


        </div>
    )
}

export default AddExperience