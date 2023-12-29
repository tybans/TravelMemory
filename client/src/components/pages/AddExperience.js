import React, { useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../../url';
import { json } from 'react-router-dom';

function AddExperience() {
    const [formdata, setFormdata] = useState({
        tripName: "",
        startDateOfJourney: "",
        endDateOfJourney: "",
        nameOfHotels: "",
        placesVisited: "",
        totalCost: 0,
        experience: "",
        image: "",
        tripType: "",
        featured: false,
        shortDescription: ""
    })
    const submitForm= () =>{
        console.log(formdata);
        axios.post(`${baseUrl}/trip/addTrip`, formdata)
    }


    return (
        <div style={{ margin: "1rem" }}>
            <div class="mb-3">
                <label for="tripName" class="form-label">Trip Name</label>
                <input type="text" class="form-control" id="tripName" placeholder='Trip Name Here' value={formdata.tripName} onChange={(e) => setFormdata({...formdata, tripName: e.target.value})} />
            </div>

            <div class="mb-3">
                <label for="tripDate" class="form-label">Trip Date</label>
                <div class='row' >
                    <div class='col-5' style={{ marginLeft: "1rem" }}>
                        <label for="startDate" class="form-label"><small>Start Date</small></label>
                        <input type="date" class="form-control" id="startDate" value={formdata.startDateOfJourney} onChange={(e) => setFormdata({...formdata, startDateOfJourney: e.target.value})}/>
                    </div>
                    <div class='col-5' style={{ marginLeft: "1rem" }} >
                        <label for="endtDate" class="form-label"><small>End Date</small></label>
                        <input type="date" class="form-control" id="endtDate" value={formdata.endDateOfJourney} onChange={(e) => setFormdata({...formdata, endDateOfJourney: e.target.value})}/>
                    </div>
                </div>
            </div>

            <div class="mb-3">
                <label for="nameOfHotels" class="form-label">Hotel Name</label>
                <input type="text" class="form-control" id="nameOfHotels" placeholder='Hotel Name Here' value={formdata.nameOfHotels} onChange={(e) => setFormdata({...formdata, nameOfHotels: e.target.value})}/>
            </div>

            <div class="mb-3">
                <div class='row'>
                    <div class='col-5' style={{ marginLeft: "1rem" }}>
                        <label for="tripType" class="form-label">Trip Type</label>
                        <select class="form-select" id='tripType' aria-label="tripType" value={formdata.tripType} onChange={(e) => setFormdata({...formdata, tripType: e.target.value})}>
                            <option selected value="backpacking">Backpacking</option>
                            <option value="leisure">Leisure</option>
                            <option value="business">Business</option>
                        </select>
                    </div>
                    <div class='col-5' style={{ marginLeft: "1rem" }}>
                        <label for="totalCost" class="form-label">Total Cost</label>
                        <input type="number" class="form-control" id="totalCost" placeholder='0000' value={formdata.totalCost} onChange={(e) => setFormdata({...formdata, totalCost: e.target.value})}/>
                    </div>
                </div>
            </div>

            <div class="mb-3">
                <label for="placesVisited" class="form-label">Places Visited</label>
                <input type="text" class="form-control" id="placesVisited" placeholder='Add the Places you visited' value={formdata.placesVisited} onChange={(e) => setFormdata({...formdata, placesVisited: e.target.value})}/>
            </div>

            <div class="mb-3">
                <label for="featured" class="form-label">Featured Trip</label>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="true" id="true" value={true} onChange={(e) => setFormdata({...formdata, featured: JSON.parse(e.target.value)})} checked={formdata.featured===true}/>
                    <label class="form-check-label" for="true">
                        True
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="false" id="false" value={false} onChange={(e) => setFormdata({...formdata, featured: JSON.parse(e.target.value)})} checked={formdata.featured===false} />
                    <label class="form-check-label" for="false">
                        False
                    </label>
                </div>
            </div>

            <div class="mb-3">
                <label for="image" class="form-label">Image Link</label>
                <input type="text" class="form-control" id="image" placeholder='Image Link Here' value={formdata.image} onChange={(e) => setFormdata({...formdata, image: e.target.value})}/>
            </div>

            <div class="mb-3">
                <label for="shortDescription" class="form-label">Short Description</label>
                <textarea class="form-control" rows='2' id="shortDescription" placeholder='Short Description Here' value={formdata.shortDescription} onChange={(e) => setFormdata({...formdata, shortDescription: e.target.value})}/>
            </div>

            <div class="mb-3">
                <label for="experience" class="form-label">Experience</label>
                <textarea class="form-control" rows='5' id="experience" placeholder='write your experience  Here' value={formdata.experience} onChange={(e) => setFormdata({...formdata, experience: e.target.value})}/>
            </div>

            <div class="mb-3" style={{textAlign:"center"}}>
                <button type='submit' class='btn btn-success' onClick={submitForm} >Submit</button>
            </div>


        </div>
    )
}

export default AddExperience