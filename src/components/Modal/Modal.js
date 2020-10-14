import React, {useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext';
import SocialIcon from '../SocialIcon/SocialIcon';
import BigNumber from '../BigNumber/BigNumber';
import UpDownArrow from '../UpDownArrow/UpDownArrow';
import Chart from '../Chart/Chart';
import {formatQuant} from '../../utils';
import './Modal.css';

const Modal = ({modalData, setShowModal, calculatedChartWidth}) => {

    let title = '';

    const {theme} = useContext(ThemeContext);

    const localTheme = theme.isDark ? 'dark-theme' : 'light-theme';
    const colorUpDown = modalData.up ? 'to-up' : 'to-down';

    switch(modalData.icon) {
        case 'fb':
            title = 'Facebook';
            break;
        case 'tw':
            title = 'Twitter';
            break;
        case 'ig':
            title = 'Instagram';
            break;
        case 'yt':
            title = 'Youtube';
            break;
        default:
                title = '';
            break;
    }

    return (
        <div className='modal-backdrop'>
            <div className={`modal ${localTheme}`}>
                <div className={`modal-top ${localTheme}`}>
                    <div className={`modal-header ${localTheme}`}>
                        <div className='modal-header-text'>
                            <h3 className={`modal-title ${localTheme}`}>{title + ' ' + modalData.type}</h3>
                            <div className={`modal-user ${localTheme}`}>
                                <SocialIcon 
                                    social={modalData.icon}/>
                                <p>{modalData.user}</p>
                            </div>
                        </div>
                        <span
                            className={`modal-close ${localTheme}`} 
                            onClick={() => setShowModal(false)}>&times;</span>
                    </div>
                    <div className='modal-data'>
                        <div className='modal-text'>
                            <BigNumber 
                                size={'sm'}
                                number={formatQuant(modalData.cant)}/>
                            <span className={`modal-caption ${localTheme}`}>Total<br/> {modalData.type}</span>
                        </div>
                        <div className='modal-text'>
                            <UpDownArrow 
                                text={modalData.percentage}
                                isUp={modalData.up}/>
                            <span className={`${colorUpDown}`}>
                                <BigNumber 
                                    size={'sm'}
                                    number={formatQuant(modalData.past)}/>
                            </span>
                            <span className={`modal-caption ${localTheme}`}>New {modalData.type} <br/>in the past 10 days</span>
                        </div>
                        <div className='modal-text'>
                            <UpDownArrow 
                                text={modalData.percentage}
                                isUp={modalData.up}/>
                                <span className={`${colorUpDown}`}>
                                    <BigNumber 
                                        size={'sm'}
                                        number={formatQuant(modalData.today)}/>
                                </span>
                            <span className={`modal-caption ${localTheme}`}>New {modalData.type}<br/>TODAY</span>
                        </div>
                    </div>
                </div>
                <div className={`modal-chart ${localTheme}`}>
                    <span>May 4 - May 13</span>
                    <Chart
                        userType={modalData.type}
                        chartWidth={calculatedChartWidth}
                    />
                </div>
            </div>
        </div>
    );
}
 
export default Modal;