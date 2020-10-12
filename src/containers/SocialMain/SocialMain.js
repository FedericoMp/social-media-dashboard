import React, {useState} from 'react';
import Card from '../../components/Card/Card';
import {MAIN_DATA} from '../../services';
import './SocialMain.css';

const SocialMain = () => {

    const [social, setSocial] = useState(MAIN_DATA);

    return (
        <main className='main-container'>
            <div className='main-wrapper'>
                {
                    social.map( item => 
                        <Card
                            key={item.id}
                            size={'lg'}
                            data={item}
                        />
                    )
                }
            </div>
        </main>
    );
}
 
export default SocialMain;