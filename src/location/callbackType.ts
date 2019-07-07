type LatLon = {
    lat: string | number;
    lon: string | number;
};

export type CallbackType = (latlon: LatLon, address: string) => void;
