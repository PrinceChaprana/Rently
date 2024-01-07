import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvent, useMapEvents } from 'react-leaflet'
import { Map as map } from 'leaflet';
import { Box, styled } from '@mui/material'
import { DataContext } from '../../context/DataProvider'


export default function Map({zoom,setOpen,lat,lng,setCoords}) {
    const Container = styled(MapContainer)`
        width: 100%;
        height: 100%;
    `
    
    const center = {
        lng: lng || 77.20300044368255,
        lat: lat || 28.733898510530132,
    };
    const [position,setPosition] = useState(center);

    const HandleClick = () => {
        const map = useMapEvents({
            click(e){
                setPosition([e.latlng.lat,e.latlng.lng]);
                setCoords([e.latlng.lat,e.latlng.lng]);
                setOpen(false)
                console.log(zoom);
            },
        });
        return null;
    }

    useEffect(() => {
        console.log(position);
    },[position])

    return (
        <div style={{width:"100%",height:"100%"}}>
            <Container
                     center={position} zoom={zoom} scrollWheelZoom={true}
            >
                <TileLayer
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                <HandleClick/>
                <Marker position={position}/>
                
            </Container>
        </div>
    )
}
