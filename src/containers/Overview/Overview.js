import React, {useState} from 'react';
import Card from '../../components/Card/Card';
import {OVERVIEW_DATA} from '../../services';
import './Overview.css';

const Overview = () => {

    const [overview, setOverview] = useState(OVERVIEW_DATA);

    return (
        <section className='overview-container'>
            <div className='overview-wrapper'>
                <h2>Overview - Today</h2>
                <div className='overview-cards'>
                    {
                        overview.map( item => 
                            <Card
                                key={item.id}
                                size={'sm'}
                                data={item}
                            />
                        )
                    }
                </div>
            </div>
        </section>
    );
}
 
export default Overview;