import React, { useState, createContext, useEffect, useContext } from "react";
import { LocationContext } from "../../location/location.context";

import {
  restaurantsRequest,
  restaurantsTransfrom,
} from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrieveRestaurants = () => {
    setIsloading(true);
    setRestaurants([]);
    setTimeout(() => {
      restaurantsRequest()
        .then(restaurantsTransfrom)
        .then((results) => {
          setIsloading(false);
          setRestaurants(results);
        })
        .catch((err) => {
          setIsloading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    // if (location) {
    //   const locationString = `${location.lat},${location.lng}`;
    retrieveRestaurants(location);
    // }
  }, [location]);

  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
