
# Google Places Search
## How to run
git  clone  https://github.com/rabbiyasana/google-places-search.git

- npm i/install

- npm start

it will start the project in expo reaact-native

- to run on ios enter i

- and for android press a

## Application Structure

### Tabs

index.tsx  

    GooglePlacesAutoCompleteSearch
        This component will have the Auto complete dropdown input
        to search locaiton and get auto suggestions.

    GoogleMapView
        This component will render the location map when user select
        any location from input dropdown

history.tsx

        Card
            It will render single card with details of location with
            2 action items (view & delete)

Constants(folder)

    colors.ts
        The file contain color theme for text, backgound, icon,

    keys.ts
        This file contain constant keys which will be using on 
        different locaitons, e.g (localstorage, route)

Hooks(folder)

    useAddUniqueId
        Custom hook to add Unique id in object which we will get from
        on select the locaiton from google places auto complete 
        dropdown.

    useLocalStorage
        Custom hooks to use Localstorage to store/edit/delete/get 
        locations for later use as history list
        

interface.ts
    
    This file will contain all interface for type scripting 

.env

    GOOGLE_PLACE_API (add your google place api key here to use
    Google Places Auto Complete library)
   
# Demo

https://github.com/user-attachments/assets/2b00a5fc-9d9b-458f-af80-dfaec1e13242

