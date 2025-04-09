export interface LocalStorageSetValue {
  id?: number ;
  text: string;
  longitude: number;
  latitude: number;
}

export interface CardProps {
  location: {
    id: number;
    text: string;
    longitude: number;
    latitude: number;
  };
  onDelete: (id: number) => void;
}
 export interface GooglePlacesAutoCompleteResultDataProps {
  description: string;
 }

 export interface GooglePlacesAutoCompleteResultDetailsProps {
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
 }

 export interface GooglePlacesAutoCompleteParamsForMapView {
    id?: number | undefined;
    text: string;
    longitude: number;
    latitude: number;
 }
