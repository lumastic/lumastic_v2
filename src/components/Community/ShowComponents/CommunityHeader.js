import React, {Component} from 'react';
import cookiePic from '../../../images/ChocolateChip.jpg';

class CommunityHeader extends Component {
    render() {
        return (
            <div style={{width: "100%", height: "130px", backgroundImage: 'url(' + cookiePic + ')', backgroundSize: "cover"}}>
                {/*<img src={cookiePic} />*/}
            </div>
        )
    }
}

export default CommunityHeader;