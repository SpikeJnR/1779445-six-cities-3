import {useEffect, useState, useRef, RefObject} from 'react';
import {Map, LatLngTuple} from 'leaflet';
import leaflet from 'leaflet';

interface City {
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
}

function useMap(mapRef: RefObject<HTMLElement>, centerCity: City) { // 1. Делаем centerCity обязательным
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current && !isRenderedRef.current) {
      const center: LatLngTuple = [
        centerCity.location.latitude,
        centerCity.location.longitude
      ];

      const instance = new Map(mapRef.current, {
        center: center,
        zoom: centerCity.location.zoom,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, centerCity]);

  useEffect(() => {
    if (map) {
      const newCenter: LatLngTuple = [
        centerCity.location.latitude,
        centerCity.location.longitude
      ];
      map.setView(newCenter, centerCity.location.zoom);
    }
  }, [centerCity, map]);
  return map;
}

export default useMap;
