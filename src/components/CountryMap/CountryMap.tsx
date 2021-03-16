import { useState, useEffect } from "react";
import './CountryMap.scss';
import setMap from './mapbox';

// interface CountryMapType {
//     coordinates: any[],
//     coordin:any
// }

// class CountryMap extends Component<CountryMapType> {


//     // Тew [-73.9874267578125, 40.734770989672406]
//     // Minsk coordinates: [27.557830810546875,53.902720016840476]
//     // Kiev [30.5255126953125, 50.450509053586615]
//     // Berlin [13.386840820312498, 52.51956352925745]

//     // Paris [2.35107421875, 48.86471476180277]
//     // London[-0.1318359375, 51.508742458803326]
//     // Abu[54.36584472656249,24.487148563173424]
//     // Ottawa[ -75.69580078125, 45.413876460821086]
//     // Sydney [151.23779296875, -33.85216970140739]


//     state = {
//         coordinates: [27.557830810546875,53.902720016840476] //Minsk
//     }


//     componentDidMount() {

//     }


//     getCoordinates = (coordinatesBD) => {
//        // console.log('coordinatesBD', coordinatesBD);
//          const _arr = coordinatesBD.split(',');
//          const nextArr: any[] = [];
//         for (let i = 0; i < _arr.length; i+=2) {
//           let doubleArr = [].concat(_arr[i], _arr[i+1]);
//          nextArr.push(doubleArr);
//         }
//         const finalArr = [nextArr];
//         return finalArr;
//       }


//     componentDidUpdate(prevProps) {
//         if (prevProps !== this.props) {
//           //  console.log('componentDidUpdate', this.props.coordinates);

//             setMap(this.props.coordinates, this.getCoordinates(this.props.coordin));
//             this.setState({ coordinates: this.props.coordinates })
//         }


//     }

//     render() {
//         return (
//             <div id="country_map" className='map'>map</div>
//         )
//     }

// }

const CountryMap = (props) => {

    const [coordinate, setCoordinate] = useState([27.557830810546875, 53.902720016840476]); //Minsk]

    const getCoordinates = (coordinatesBD) => {

        console.log('coordinatesBD ', coordinatesBD);
        
        //        // console.log('coordinatesBD', coordinatesBD);
        const _arr = coordinatesBD.split(',');
        const nextArr: any[] = [];
        for (let i = 0; i < _arr.length; i += 2) {
            let doubleArr = [].concat(_arr[i], _arr[i + 1]);
            nextArr.push(doubleArr);
        }
        const finalArr = [nextArr];
        return finalArr;
    }


    //             this.setState({ coordinates: this.props.coordinates })

const fetchCoord = () => {
    setCoordinate(props.coordinates);
}
    useEffect(() => {
   
        
        fetchCoord();

        if (props.coordin.length > 0  && coordinate.length > 0) {
            setMap(coordinate, getCoordinates(props.coordin));
        }
        
       

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [coordinate, props]);



    return (
        <div id="country_map" className='map'>map</div>
    )

}

export default CountryMap;