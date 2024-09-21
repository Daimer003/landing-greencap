import React from 'react';
import PropTypes from 'prop-types';


Button.propTypes = {
    title: PropTypes.string,
};

function Button(props) {
    const { title, path } = props;
    return (
        <a href={path} className="tf-button " target='_blank' rel="noreferrer">{title}</a>
    );
}

export default Button;