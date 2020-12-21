import React,{useState, useEffect} from 'react';
import { NativeSelect, FormControl, StylesProvider } from "@material-ui/core";

import { fetchcountires  } from "../../api";

import styles from './CountryPicker.module.css';

const CountryPicker = ({handleCountryChange}) => {
    const[fetchedCountries,setFetchedCountries]=useState([]);

    useEffect(() => {
        const fetchAPI = async () =>{
            setFetchedCountries(await fetchcountires());
        }
        
        fetchAPI();
    },[setFetchedCountries]);

   
    
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((country,i)=> <option key={i} value={country}>{country}</option> )}
            </NativeSelect>
        </FormControl>
        
    )
}

export default CountryPicker;