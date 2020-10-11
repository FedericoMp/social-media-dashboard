import React from 'react';
import {FACEBOOK_ICON, TWITTER_ICON, INSTAGRAM_ICON, YOUTUBE_ICON} from '../../constants';
import {isEmpty} from '../../utils';

const SocialIcon = ({social}) => {
    let imgObj = {};
    switch (social) {
        case 'fb':
            imgObj.src = FACEBOOK_ICON;
            imgObj.alt = 'Facebook';
            break;
        case 'tw':
            imgObj.src = TWITTER_ICON;
            imgObj.alt = 'Twitter';
            break;
        case 'ig':
            imgObj.src = INSTAGRAM_ICON;
            imgObj.alt = 'Instagram';
            break;
        case 'yt':
            imgObj.src = YOUTUBE_ICON;
            imgObj.alt = 'Youtube';
            break;
        default:
            break;
    }
    return ( 
        <span>
            {
                (!isEmpty(imgObj))
                    ? <img 
                        src={imgObj.src} 
                        alt={imgObj.alt} />
                    : 'No image provider'
            }
        </span>
     );
}
 
export default SocialIcon;