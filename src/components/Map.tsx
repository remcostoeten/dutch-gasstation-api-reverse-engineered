'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { GasStation } from '@/core/types'
import L from 'leaflet'

delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
    iconRetinaUrl: '/leaflet/images/marker-icon-2x.png',
    iconUrl: '/leaflet/images/marker-icon.png',
    shadowUrl: '/leaflet/images/marker-shadow.png',
})

type MapProps = {
    stations: GasStation[]
}

export default function Map({ stations }: MapProps) {
    return (
        <MapContainer center={[52.3676, 4.9041]} zoom={7} scrollWheelZoom={false} style={{ height: 400, width: "100%" }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {stations.map((station) => (
                <Marker
                    key={`${station.name}-${station.location.coordinates.latitude}-${station.location.coordinates.longitude}`}
                    position={[station.location.coordinates.latitude, station.location.coordinates.longitude]}
                >
                    <Popup>
                        <strong>{station.name}</strong><br />
                        Price: €{station.fuel.fuelPrice.toFixed(2)}<br />
                        {station.location.address.city}, {station.location.address.province}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    )
}