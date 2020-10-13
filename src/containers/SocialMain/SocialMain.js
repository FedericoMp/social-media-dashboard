import React, {useState} from 'react';
import Card from '../../components/Card/Card';
import SocialIcon from '../../components/SocialIcon/SocialIcon';
import BigNumber from '../../components/BigNumber/BigNumber';
import UpDownArrow from '../../components/UpDownArrow/UpDownArrow';
import {formatQuant} from '../../utils';
import {MAIN_DATA} from '../../services';

const SocialMain = () => {

    // eslint-disable-next-line
    const [social, setSocial] = useState(MAIN_DATA);

    const socialData = social.map(item => 
        <Card
            key={item.id}
            data={item} >
            <div className='card-container'>
                <div className='card-social'>
                    <SocialIcon 
                        social={item.icon}/>
                    <p className='card-social-text lg'>{item.user}</p>
                </div>
                <div className='card-number lg'>
                    <BigNumber 
                        size={'lg'}
                        number={formatQuant(item.cant)}/>
                    <p className='card-number-text lg'>{item.type}</p>
                </div>
                <div className='card-up-down'>
                    <UpDownArrow 
                        text={item.today}
                        isUp={item.up}/>
                </div>
            </div>
        </Card>
    );

    return (
        <main className='main-container'>
            { socialData }
        </main>
    );
}
 
export default SocialMain;