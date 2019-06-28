export type CallbackType = (
  latlon: { lat: string | number; lon: string | number },
  address: string
) => void;
