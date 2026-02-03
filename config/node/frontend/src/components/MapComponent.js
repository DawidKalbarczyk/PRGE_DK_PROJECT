import {React, useRef, useEffect, useState} from 'react';
import Map from "ol/Map";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import View from "ol/View";
import {useGeographic} from "ol/proj";
import "ol/ol.css";
import {TileWMS} from 'ol/source';

function MapComponent(props) {
    const mapRef = useRef(null);
    const layersRef = useRef({});
    const [layers, setLayers] = useState({
        osm: true,
        deliverymen: true,
        stores: true
    });
    
    useGeographic();
    useGeographic();
    useEffect(() => {
        const osmLayer = new TileLayer({
            source: new OSM(),
        });
        
        const deliverymenLayer = new TileLayer({
            source: new TileWMS({
                url: "/geoserver/prge_project/wms?",
                params: {
                    'LAYERS': 'prge_project:deliverymen',
                    'TILED': true,
                    'VERSION': '1.1.0'
                },
                serverType: 'geoserver',
                transition: 300,
                crossOrigin: 'anonymous'
            })
        });
        
        const storesLayer = new TileLayer({
            source: new TileWMS({
                url: "/geoserver/prge_project/wms?",
                params: {
                    'LAYERS': 'prge_project:stores',
                    'TILED': true,
                    'VERSION': '1.1.0'
                },
                serverType: 'geoserver',
                transition: 300,
                crossOrigin: 'anonymous'
            })
        });
        
        layersRef.current = { osm: osmLayer, deliverymen: deliverymenLayer, stores: storesLayer };
        
        const map = new Map({
            target: mapRef.current,
            layers: [osmLayer, deliverymenLayer, storesLayer],
            view: new View({
                center: [21, 52],
                zoom: 6
            })
        });
        return () => map.setTarget(null);
    }, [] ) ;

    const toggleLayer = (layerName) => {
        setLayers(prev => {
            const newState = {...prev, [layerName]: !prev[layerName]};
            if (layersRef.current[layerName]) {
                layersRef.current[layerName].setVisible(newState[layerName]);
            }
            return newState;
        });
    };

    return (
        <div className="map-component-main-container">
            <div className="mapComponent" ref={mapRef}></div>
            <div className="map-component-layer-container">
                <div className="map-component-layer-title">Warstwy</div>
                <label className="map-component-layer-label">
                    <input type="checkbox" checked={layers.osm} onChange={() => toggleLayer('osm')} /> OSM
                </label>
                <label className="map-component-layer-label">
                    <input type="checkbox" checked={layers.deliverymen} onChange={() => toggleLayer('deliverymen')} /> Dostawcy
                </label>
                <label className="map-component-layer-label">
                    <input type="checkbox" checked={layers.stores} onChange={() => toggleLayer('stores')} /> Sklepy
                </label>
            </div>
        </div>
    );
}

export default MapComponent;