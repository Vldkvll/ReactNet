import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {getAuthUserDataThunk, loginIsFetching, setAuthUserData} from "../../MyRedux/auth-reducer";
import Preloader from "../Users/Preloader";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserDataThunk();
    }

    // don't forget to create function render () !!!!!!!!!!!!!!
    render() {
        return <>
            {/*{this.props.isFetching ? <Preloader/> : null}*/}
            <div>
                <Header {...this.props} />
            </div>

        </>
    }
}

const mapStateToProps = (state) => {
    return {
        usersId: state.auth.usersId,
        email: state.auth.email,  //blabla@blabla,
        login: state.auth.login,  //samurai,
        isAuth: state.auth.isAuth,
        isFetching: state.auth.isFetching,
    }
};

export default connect(mapStateToProps,
    {getAuthUserDataThunk, loginIsFetching,}
)(HeaderContainer);
