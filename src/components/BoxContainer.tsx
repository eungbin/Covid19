import React, {useState} from 'react';
import '../css/BoxContainer.css';
import useAxiosGet from '../hooks/useAxiosGet';
import Box from './Box';

interface KoreaData {
    updated:                number;
    country:                string;
    countryInfo: {
        _id:    number;
        iso2:   string;
        iso3:   string;
        lat:    number;
        long:   number;
        flag:   string;
    };
    cases:	                number;
    todayCases:	            number;
    deaths:	                number;
    todayDeaths:	        number;
    recovered:	            number;
    todayRecovered:	        number;
    active:	                number;
    critical:	            number;
    casesPerOneMillion:	    number;
    deathsPerOneMillion:	number;
    tests:	                number;
    testsPerOneMillion:	    number;
    population:	            number;
    continent:	            number;
    oneCasePerPeople:	    number;
    oneDeathPerPeople:	    number;
    oneTestPerPeople:	    number;
    activePerOneMillion:	number;
    recoveredPerOneMillion:	number;
    criticalPerOneMillion:	number;
}


const BoxContainer = () => {
    const { data } = useAxiosGet<KoreaData>("https://disease.sh/v3/covid-19/countries/KR");

    console.log(data);
    
    return (
        <div className="boxContainer">
            <div>
                <Box 
                    title="확진자"
                    total={data?.cases}
                    today={data?.todayCases}
                />
            </div>
            <div>
                <Box 
                    title="완치자"
                    total={data?.recovered}
                    today={data?.todayRecovered}
                />
            </div>
            <div>
                <Box 
                    title="사망자"
                    total={data?.deaths}
                    today={data?.todayDeaths}
                />
            </div>
        </div>
    );
};

export default BoxContainer;