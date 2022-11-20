import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';

function Mangoes(props) {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAwi3t_ncM6Ai8ZthQQsgoimwcBUx3wPo4"
  })

  const centerPhilippines = { lat: 11.332799, lng: 123.056932 }
  const pangasinan = { lat: 15.980713, lng: 120.407195 }
  const visayas = { lat: 10.312807, lng: 123.260525 }
  const davao = { lat: 7.318711, lng: 125.434308 }
  const mindanao = { lat: 8.424077, lng: 123.268533 }

  const centerIndia = { lat: 15.918457, lng: 80.044207 }
  const visakhapatnam = { lat: 17.657618, lng: 83.017234 }
  const tirupati = { lat: 13.691804, lng: 79.616670 }

  if (!isLoaded) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <GoogleMap center={centerPhilippines} zoom={5} mapContainerStyle={{ width: "400px", height: "400px" }}>
          <Marker position={pangasinan} />
          <Marker position={visayas} />
          <Marker position={davao} />
          <Marker position={mindanao} />
        </GoogleMap>
        <span style={{ marginTop: "5px" }}><b>Philippines</b></span>
      </div>
      <div style={{ marginLeft: "20px" }}>
        <GoogleMap center={centerIndia} zoom={5} mapContainerStyle={{ width: "400px", height: "400px" }}>
          <Marker position={visakhapatnam} />
          <Marker position={tirupati} />
        </GoogleMap>
        <span style={{ marginTop: "5px" }}><b>India</b></span>
      </div>
    </div>
  );
}

export default Mangoes;
