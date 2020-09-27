import React,{ useState, useEffect } from 'react';
import { NativeSelect, FormControl, formatMs} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';


const CountryPicker = ({handleCountryChange}) => {

    const[Countries,setCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () =>{
            setCountries(await fetchCountries());
        }
        fetchAPI();
    },[setCountries]);

    return(
        <FormControl>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">
                Global
                </option>
    {Countries.map((country, i ) => <option key={i} value ={country} >{country}</option>)}

            </NativeSelect>
        </FormControl>
        
    )

}

export default CountryPicker;