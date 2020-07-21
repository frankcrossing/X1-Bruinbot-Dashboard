import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'


class Dashboard extends Component {
    render() {
        const {auth}=this.props;
        if (!auth.uid) return <Redirect to='/camera' />
       
        return (
            <div className="dashboard container">
               
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Dashboard);