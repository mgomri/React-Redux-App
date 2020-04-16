import React from 'react';

export const Country = props => {

    const getUTC = unix => {
       const date = new Date(unix);
       return `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`; 
    };
    const formatNumber = number =>{
        let numberString = number.toString();
        let Length = numberString.length;
        
        if(Length > 3){
          return  numberString.slice(0, Length-3) + ',' + numberString.slice(Length-3, Length)
        }
        else return (numberString);
      }
    
    return(
        <div className='box country-info'>
            
              
                <div className='col-one'>
                    <h3>Country </h3>
                    <h3>Last Update </h3> 
                    <h3>Confirmed Cases</h3> 
                    <h3>Recovered Cases</h3> 
                    <h3>Deaths </h3>
                </div>
                <div className='col-two'>
                    <h3>{props.country.countryRegion}</h3>
                    <h3>{getUTC(props.country.lastUpdate)}</h3> 
                    <h3>{formatNumber(props.country.confirmed)}</h3> 
                    <h3>{formatNumber(props.country.recovered)}</h3> 
                    <h3>{formatNumber(props.country.deaths)} </h3>
                </div>
              
              {props.state.error && <p className='error'>{props.error}</p>}
        </div>
    
    )
}