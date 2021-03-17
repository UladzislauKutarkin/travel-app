import { useState, useEffect } from "react";
import "./CountryMap.scss";
import setMap from "./mapbox";

const CountryMap = (props) => {
  const [coordinate, setCoordinate] = useState([
    27.557830810546875,
    53.902720016840476,
  ]);


  const getCoordinates = (coordinatesBD) => {
    const _arr = coordinatesBD.split(",");
    const nextArr: any[] = [];
    for (let i = 0; i < _arr.length; i += 2) {
      let doubleArr = [].concat(_arr[i], _arr[i + 1]);
      nextArr.push(doubleArr);
    }
    const finalArr = [nextArr];
    return finalArr;
  };


  const fetchCoord = () => {
    setCoordinate(props.coordinates);
  };


  useEffect(() => {
    fetchCoord();
    if (props.coordin.length > 0 && coordinate.length > 0) {
      setMap(coordinate, getCoordinates(props.coordin));
    }
  }, [coordinate, props]);

  
  return (
    <div id="country_map" className="map">
      map
    </div>
  );
};

export default CountryMap;
