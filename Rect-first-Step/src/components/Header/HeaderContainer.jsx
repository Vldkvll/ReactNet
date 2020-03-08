import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {getAuthUserDataThunk, logout} from "../../MyRedux/auth-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserDataThunk();
    }
    render() {
        return <>
            <div>
                <Header {...this.props} />
            </div>
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.auth.login,  //samurai,
        isAuth: state.auth.isAuth,
    }
};

export default connect(mapStateToProps,
    {getAuthUserDataThunk, logout}
)(HeaderContainer);
