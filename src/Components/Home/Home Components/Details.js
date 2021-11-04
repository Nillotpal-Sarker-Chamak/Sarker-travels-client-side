import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import { Spinner } from "react-bootstrap";

const Details = () => {
    const { id } = useParams();
    console.log(id);
    const { user, userEmail } = useAuth();
    const [place, setPlace] = useState([]);
    const btnClicked = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/interested', { user: user, email: userEmail, Place: place[0], request: 0 }).then((res) => {

            alert('Succesfully added to the list');
        })

    }
    const deleteRequest = (id) => {
        const confirm = window.confirm('Are You really want to delete it?')
        if (confirm) {
            axios.post('http://localhost:5000/deleteplace', { id: id }).then(res => {
                //console.log(res.data);
                if (res.data.deletedCount > 0) {

                }
            });
        }
    }
    useEffect(() => {
        axios.get(`http://localhost:5000/touristSpots/${id}`).then(res => {
            console.log(res.data);
            setPlace(res.data);
        })
    }, [])

    return (
        <div>
            {place.length === 0 ? <Spinner animation="border" />
                :
                place.map((item) => <div key={item._id}>
                    <h2>Details of: {item.Name}</h2>
                    <h3>Address:{item.Address}</h3>
                    <div><img src={item.Image} alt="" /></div>
                    <div>
                        <button type="submit" className="btn btn-success mx-2" onClick={btnClicked}>Interested</button>
                        <button className="btn btn-danger mx-2" onClick={() => deleteRequest(item._id)}>Delete</button>
                    </div>

                </div>)
            }

        </div>
    )
}

export default Details;
