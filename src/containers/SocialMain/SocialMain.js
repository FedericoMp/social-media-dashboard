import React, {useState, useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext';
import Card from '../../components/Card/Card';
import SocialIcon from '../../components/SocialIcon/SocialIcon';
import BigNumber from '../../components/BigNumber/BigNumber';
import UpDownArrow from '../../components/UpDownArrow/UpDownArrow';
import Modal from '../../components/Modal/Modal';
import {formatQuant} from '../../utils';
import {MAIN_DATA} from '../../services';

const SocialMain = () => {

    // eslint-disable-next-line
    const [social, setSocial] = useState(MAIN_DATA);
    const [showModal, setShowModal] = useState(false);
    const [modalData, setmodalData] = useState({});

    const {theme} = useContext(ThemeContext);

    const localTheme = theme.isDark ? 'dark-theme' : 'light-theme';

    const socialData = social.map(item => 
        <Card
            key={item.id}
            data={item}
            setShowModal={setShowModal} 
            setmodalData={setmodalData}>
            <div className={`card-container ${localTheme}`}>
                <div className='card-social'>
                    <SocialIcon 
                        social={item.icon}/>
                    <p className={`card-social-text lg ${localTheme}`}>{item.user}</p>
                </div>
                <div className='card-number lg'>
                    <BigNumber 
                        size={'lg'}
                        number={formatQuant(item.cant)}/>
                    <p className={`card-number-text lg ${localTheme}`}>{item.type}</p>
                </div>
                <div className='card-up-down'>
                    <UpDownArrow 
                        text={item.todayText}
                        isUp={item.up}/>
                </div>
            </div>
        </Card>
    );

    window.addEventListener('resize', () => setShowModal(false));

    let calculatedChartWidth; 
    if (window.innerWidth <= 550) {
        calculatedChartWidth = 300;
    } else if (window.innerWidth <= 600) {
        calculatedChartWidth = 400;
    } else if (window.innerWidth <= 750 || window.innerWidth >= 750) {
        calculatedChartWidth = 500;
    }

    return (
        <main className='main-container'>
            { socialData }
            {
                (showModal)
                    ? (
                        <Modal
                            modalData={modalData}
                            setShowModal={setShowModal}
                            calculatedChartWidth={calculatedChartWidth}
                        />
                    )
                    : null
            }
        </main>
    );
}
 
export default SocialMain;