import { GooglePlacesAutoCompleteParamsForMapView } from "@/interfaces";

export function useAddUniqueId(field: string, data:GooglePlacesAutoCompleteParamsForMapView) {

return {[field]: Math.floor(Math.random() * 101),...data}

}
