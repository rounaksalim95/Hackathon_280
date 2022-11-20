import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';

function Bananas(props) {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAwi3t_ncM6Ai8ZthQQsgoimwcBUx3wPo4"
  })

  const centerChina = { lat: 26.282581, lng: 107.896686 }
  const guandong = { lat: 24.043248, lng: 114.740903 }
  const guangxi = { lat: 24.062199, lng: 110.517365 }
  const yunnan = { lat: 24.545885, lng: 101.519394 }
  const hainan = { lat: 19.339891, lng: 109.755478 }

  const centerIndonesia = { lat: -6.419890, lng: 108.117360 }
  const lampung = { lat: -4.810370, lng: 105.250977 }
  const eastJava = { lat: -7.428161, lng: 112.114438 }
  const westJava = { lat: -6.997026, lng: 107.713104 }

  if (!isLoaded) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <GoogleMap center={centerChina} zoom={4} mapContainerStyle={{ width: "400px", height: "400px" }}>
          <Marker position={guandong} />
          <Marker position={guangxi} />
          <Marker position={yunnan} />
          <Marker position={hainan} />
        </GoogleMap>
        <span style={{ marginTop: "5px" }}><b>China</b></span>
      </div>
      <div style={{ marginLeft: "20px" }}>
        <GoogleMap center={centerIndonesia} zoom={4} mapContainerStyle={{ width: "400px", height: "400px" }}>
          <Marker position={lampung} />
          <Marker position={eastJava} />
          <Marker position={westJava} />
        </GoogleMap>
        <span style={{ marginTop: "5px" }}><b>Indonesia</b></span>
      </div>
    </div>
  );
}

export default Bananas;
