import GoogleMapReact from "google-map-react";

const Map = ({
  location,
  zoomLevel,
}: {
  location: { address: string; lat: number; lng: number };
  zoomLevel: number;
}) => (
  <div className="h-96 w-full">
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyAAKRoc5D0hZv0BmpDuOLHL3n98Zm5CA0E" }}
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

export default Map;
