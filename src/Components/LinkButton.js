import React from 'react';
import { Link } from 'react-router'

const LinkButton = (props) => {
    return (
        <div className="row">
            <div className="clear center-text">
                <Link to={props.link} className="btn btn-more">
                    {props.text}
                </Link>
            </div>
        </div>
    );
};

export default LinkButton;