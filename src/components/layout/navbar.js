import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedinLinks'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

const Navbar =(props)=> {


    var Textstyles = {
        color: 'black', 
        fontSize: '48px',
        position: 'absolute',
        left: '50px',
        top: '25px'
    }

    var styles = {
        height: '120px',
        position: 'absolute',
    }

    const {auth}=props;
    const links = <SignedInLinks />;
    
    
    return (
        <nav className="nav-wrapper darken-" style = {styles}>
            <div className="container">
                
                <Link to='/camera' className="brand-logo" style={Textstyles}  onClick ={<Redirect to = '/signin' />  }  >
                    X1 BruinBot</Link>
          
            </div>
        </nav>
    )
}

const mapStateToProps=(state)=> {
    
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar);