import React from 'react';
import { connect } from 'react-redux';
import { getCovid19 } from './actions/actions';
import { CountryList } from './components/CountryList';





const App = props => {
  const fetchCovid19 = e => {
    e.preventDefault();
    props.getCovid19();
}

const sortingCriteria = (num1, num2) => {
  return num1 - num2 ;
}

let dataSubset = props.state.data.slice(0,9);

return (
    <div className='App'>
      <div className='title'>COVID-19 Tracking App</div>
        <button className='button is-info is-outlined' onClick={fetchCovid19}>Fetch Data</button>
        <CountryList dataSubset={dataSubset} state={props.state}/>
             
    </div>
);
}

const mapStateToProps = state => {
  return { 
    state: state
  }
}
export default connect(mapStateToProps, { getCovid19}) (App);
