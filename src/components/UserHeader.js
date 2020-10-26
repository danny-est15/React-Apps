import React from 'react';
import { connect } from 'react-redux';


class UserHeader extends React.Component {
    render() {
        const { user } = this.props;
        if (!user) {
            return null;
        }
        return <div className='header'>{user.name}</div>;
    }
}

const mapStateToProps = (state, ownProps) => { // a copy of the props about to be sent into this component is passed in through ownProps
    return { user: state.users.find(user => user.id === ownProps.userId)}; // gets the user that matchs the userId that's passed into the component and search through the entire state users array
};

export default connect(mapStateToProps)(UserHeader);