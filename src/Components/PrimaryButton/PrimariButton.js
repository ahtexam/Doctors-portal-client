import React, { Children } from 'react';

const PrimariButton = ({Children}) => {
    return (
        <button className="btn btn-primary  bg-gradient-to-r from-secondary to-primary">Get start{Children}</button>

    );
};

export default PrimariButton;