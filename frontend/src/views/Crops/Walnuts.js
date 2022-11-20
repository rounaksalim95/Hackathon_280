import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';

function Walnuts(props) {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAwi3t_ncM6Ai8ZthQQsgoimwcBUx3wPo4"
  })

  const centerCalifornia = { lat: 37.503960, lng: -121.008422 }
  const sanJoaquin = { lat: 36.589079, lng: -120.211004 }
  const SacramentoValley = { lat: 38.317185, lng: -121.635339 }

  const centerIran = { lat: 33.724472, lng: 50.631158 }
  const kerman = { lat: 30.279217, lgn: 57.060681 }
  const kermanshah = { lat: 34.338472, lng: 47.100624 }
  const hamedan = { lat: 34.793002, lng: 48.514117 }
  const lorestan = { lat: 33.490891, lng: 48.629127 }
  const kohgilouyehBoyerahmad = { lat: 30.895319, lng: 50.823964 }
  const khorasanRazavi = { lat: 35.899537, lng: 58.983190 }
  const bakhtiari = { lat: 34.000000, lng: 50.000000 }
  const easternAzerbaijan = { lat: 38.108368, lng: 46.606365 }
  const westernAzerbaijan = { lat: 37.000000, lng: 45.000000 }
  const markazi = { lat: 35.000000, lng: 50.000000 }

  if (!isLoaded) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <GoogleMap center={centerCalifornia} zoom={5} mapContainerStyle={{ width: "400px", height: "400px" }}>
          <Marker position={sanJoaquin} />
          <Marker position={SacramentoValley} />
        </GoogleMap>
        <span style={{ marginTop: "5px" }}><b>California</b></span>
      </div>
      <div style={{ marginLeft: "20px" }}>
        <GoogleMap center={centerIran} zoom={5} mapContainerStyle={{ width: "400px", height: "400px" }}>
          <Marker position={kerman} />
          <Marker position={kermanshah} />
          <Marker position={hamedan} />
          <Marker position={lorestan} />
          <Marker position={kohgilouyehBoyerahmad} />
          <Marker position={khorasanRazavi} />
          <Marker position={bakhtiari} />
          <Marker position={easternAzerbaijan} />
          <Marker position={westernAzerbaijan} />
          <Marker position={markazi} />
        </GoogleMap>
        <span style={{ marginTop: "5px" }}><b>Iran</b></span>
      </div>
    </div>
  );
}

export default Walnuts;
