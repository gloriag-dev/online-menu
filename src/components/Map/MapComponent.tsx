import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L, { LatLngExpression } from "leaflet"
import style from "./MapComponent.module.scss"

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png"
})

const MapComponent = () => {
    const position: LatLngExpression = [28.5383, -81.3792, 10] // Coordinates for Orlando, Florida

    return (
        <div className={style.map}>
            <MapContainer center={position} zoom={13} className={style.leafletContainer}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
                <Marker position={position}>
                    <Popup>We are here! Orlando, FL</Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default MapComponent
