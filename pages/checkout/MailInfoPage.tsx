import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


class MailInfoPage extends React.Component {
    
    render() {
        return (
            <div className="mailinginfo">
                <p>{this.props.saleitem.title}</p>
                <p>Gather postal info</p>
            </div>   
        )
}
}
   

const mapStateToProps = (state /*, ownProps*/) => {
    return {
      saleitem: state.saleitem
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
    
    };
  }

  export const ConnectedMailInfoPage = connect(
    mapStateToProps,
    mapDispatchToProps
  )(MailInfoPage)