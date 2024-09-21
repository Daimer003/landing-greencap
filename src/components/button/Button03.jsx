import React from 'react';
import PropTypes from 'prop-types';


Button03.propTypes = {
    title: PropTypes.string,
};

function Button03(props) {
    const { title, path } = props;
    return (
        <a href={path} className="tf-button discord" target='_blank' rel="noreferrer" ><span>{title}</span></a>
    );
}

export default Button03;