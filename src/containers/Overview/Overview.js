import React, {useState, useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext';
import Card from '../../components/Card/Card';
import SocialIcon from '../../components/SocialIcon/SocialIcon';
import BigNumber from '../../components/BigNumber/BigNumber';
import UpDownArrow from '../../components/UpDownArrow/UpDownArrow';
import {formatQuant} from '../../utils';
import {OVERVIEW_DATA} from '../../services';

const Overview = () => {

    // eslint-disable-next-line
    const [overview, setOverview] = useState(OVERVIEW_DATA);

    const {theme} = useContext(ThemeContext);
    console.log(theme);

    const overviewData = overview.map( item => 
        <Card
            key={item.id} 
            data={item}>
            <div className='card-container sm'>
                <div className='card-social sm'>
                    <p>{item.title}</p>
                    <SocialIcon 
                        social={item.icon}/>
                </div>
                <div className='card-number sm'>
                    <BigNumber 
                        size={'sm'}
                        number={formatQuant(item.cant)}/>
                    <UpDownArrow 
                        text={item.percentage}
                        isUp={item.up}/>
                </div>
            </div>
        </Card>
    );

    return (
        <section className='overview-container'>
            <h2>Overview - Today</h2>
            <div className='overview-cards'>
                { overviewData }
            </div>
        </section>
    );
}
 
export default Overview;