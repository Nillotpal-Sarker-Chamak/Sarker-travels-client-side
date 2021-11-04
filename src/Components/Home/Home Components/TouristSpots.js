import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const TouristSpots = () => {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/touristSpots')
            .then((data) => {
                setPlaces(data.data);
                console.log(data.data);
            })
    }, [])
    return (
        <div>
            <h3 className="text-center m-3">Choose Your Tourist Spot</h3>
            <div className="d-flex flex-wrap justify-content-center">
                {places.map(place =>
                    <div key={place._id} className="border rounded shadow-lg p-2 m-4">
                        <img src={place.Image} alt={place._id} width="350px" height="250px" />
                        <h3 className="my-2">{place.Name}</h3>
                        <h4 className="my-2">{place.Address}</h4>
                        <Link to={`/place/${place._id}`}><button className="btn btn-warning">View Details</button></Link>
                    </div>
                )}
            </div>
        </div>
    )
}
export default TouristSpots;