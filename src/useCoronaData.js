import './App.css';
import {useEffect, useState} from 'react';

export default function (value){

    const [data, setData] = useState();

    useEffect(() => {
        if(value.length === 2){
          const handle = setTimeout(() => {
            console.log(handle)
            fetch(`https://corona-api.com/countries/${value}`)
              .then(res => res.json())
              .then(results => setData(results.data))
          }, 1500);
          return () => {
            clearInterval(handle);
          };
        }
      }, [value]);
      return data;
}