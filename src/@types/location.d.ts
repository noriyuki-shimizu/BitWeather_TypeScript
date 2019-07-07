declare type LatLon = { lat: number | string; lon: number | string };

declare type LocationCallbackType = (latlon: LatLon, address: string) => void;
