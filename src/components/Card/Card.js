import React from 'react';
import SocialIcon from '../SocialIcon/SocialIcon';
import BigNumber from '../BigNumber/BigNumber';
import UpDownArrow from '../UpDownArrow/UpDownArrow';
import {formatQuant} from '../../utils';
import './Card.css';

const Card = ({data, size}) => {
    return (  
        <div className={`
            card
            ${(size === 'lg') ? 'lg' : ''}
            ${(size === 'sm') ? 'sm' : ''}
        `}>
            {
                (size === 'lg')
                    ? (
                        <div className='card-lg-container'>
                            <div className='card-lg-social'>
                                <SocialIcon 
                                    social={data.icon}/>
                                <p className='card-social-text'>{data.user}</p>
                            </div>
                            <div className='card-lg-number'>
                                <BigNumber 
                                    size={'lg'}
                                    number={formatQuant(data.cant)}/>
                                <p className='card-number-text'>{data.type}</p>
                            </div>
                            <div className='card-lg-up-down'>
                                <UpDownArrow 
                                    text={data.today}
                                    isUp={data.up}/>
                            </div>
                        </div>
                    )
                    : ( 
                        <div className='card-sm-container'>
                            <div className='card-sm-social'>
                                <p className='card-sm-social-text'>{data.title}</p>
                                <SocialIcon 
                                    social={data.icon}/>
                            </div>
                            <div className='card-sm-number'>
                                <BigNumber 
                                    size={'sm'}
                                    number={formatQuant(data.cant)}/>
                                <UpDownArrow 
                                    text={data.percentage}
                                    isUp={data.up}/>
                            </div>
                        </div>
                     )
            }
        </div>
    );
}
 
export default Card;