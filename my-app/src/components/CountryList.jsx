import React from 'react';
import { Country } from './Country';

export const CountryList = props => {
    return (
        <div>
            {props.dataSubset.map(el => <Country key={el.uid} country={el} state={props.state}/> )}
        </div>
    );
}