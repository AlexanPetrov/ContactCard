import React, { Component } from "react"
import PropTypes from 'prop-types'


class Card extends Component {
    render() {
        return <h3>
                    Name: {this.props.name} <br></br>
                    Email: {this.props.email} <br></br>
                    Mobile: {this.props.phone} <br></br>
                    Work: {this.props.work}
               </h3>
    } 
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    mobile: PropTypes.string.isRequired,
    work: PropTypes.string.isRequired
}

export default Card;
