import GoogleMapReact from "google-map-react"

const apiKey = import.meta.env.VITE_MAP_API_KEY
console.log(apiKey)
const Map = ({
  location,
  zoomLevel,
}: {
  location: { address: string; lat: number; lng: number };
  zoomLevel: number;
}) => (
  <div className="h-96 w-full">
    <GoogleMapReact
      bootstrapURLKeys={{ key: apiKey }}
      defaultCenter={location}
      defaultZoom={zoomLevel}
    >
      {/* <div className="pin">
          <Icon icon={locationIcon} className="pin-icon" />
          <p className="pin-text">{text}</p>
        </div> */}
    </GoogleMapReact>
  </div>
);

export default Map