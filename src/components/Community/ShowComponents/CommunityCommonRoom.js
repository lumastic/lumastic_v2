import React, {Component} from 'react';

class CommunityCommonRoom extends Component {
    componentDidMount() {
        console.log("Common room mounted");
    }

    render() {
        const { active } = this.props;
        return (
            <div>
                {active.toString()}
                CommunityCommonRoom
            </div>
        )
    }
}

export default CommunityCommonRoom;