import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import { API } from "../config/api";
import numberWithCommas from "../utils/utils";
import { useHistory } from "react-router";
import { API_URL } from "../utils/constants";

// function TourComponent() {
//   const history = useHistory();
//   const [trips, setTrips] = useState([]);
//   const getTrips = async () => {
//     try {
//       const response = await API.get("/trips");
//       // Store product data to useState variabel
//       setTrips(response.data.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//  const cardTrip = () => {
//     return (
//       <>
//         <div className="card tour">
//           <div className="card-body py-0 text-center">
//             <img
//               className="thumbnail my-3"
//               onClick={(props) => (window.location.href = "/trip/" + trip.id)}
//               src={trip.image[0]}
//             />
//             <h5 className="card-title">{trip.title}</h5>
//             <p className="card-text text-warning">
//               Rp.{numberWithCommas(trip.price)}
//               <span className="text-secondary ms-3">{trip.country}</span>
//             </p>
//           </div>
//         </div>
//       </>
//     );
//   }
//   useEffect(() => {
//     getTrips();
//   }, []);
//   return (
//     <Container>
//       <div className="row">
//         {trips.length !== 0 ? (
//           <div className="col md-2 mx-auto">
//             {products?.map((item, index) => (
//               <cardTrip item={item} key={index} />
//             ))}
//           </div>
//         ) : (
//           <div className="text-center pt-5">
//             <img
//               src="https://img.freepik.com/free-vector/no-data-illustration-concept_108061-573.jpg?size=338&ext=jpg"
//               className="img-fluid"
//               style={{ width: "40%" }}
//               alt="empty"
//             />
//             <div className="mt-3">No data product</div>
//           </div>
//         )}
//         )
//       </div>
//     </Container>
//   );
// }
// export default TourComponent;

export default class TourComponent extends React.Component {
  state = {
    trips: [],
  };

  componentDidMount() {
    axios.get(API_URL + "trips").then((res) => {
      const data = res.data.data;
      this.setState({data});
      console.log(this.state.data);
    });
  }

  render() {
    const {trips} = this.state;
    // console.log(trips);
    return (
      <Container>
        <div className="row">
          {trips &&
            trips.map((trip) => (
              <div className="col md-2 mx-auto">
                <div className="card tour">
                  <div className="card-body py-0 text-center">
                    <img
                      className="thumbnail my-3"
                      onClick={(props) =>
                        (window.location.href = "/trip/" + trip.id)
                      }
                      src={trip.image[0]}
                    />
                    <h5 className="card-title">{trip.title}</h5>
                    <p className="card-text text-warning">
                      Rp.{numberWithCommas(trip.price)}
                      <span className="text-secondary ms-3">
                        {trip.country}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </Container>
    );
  }
}
