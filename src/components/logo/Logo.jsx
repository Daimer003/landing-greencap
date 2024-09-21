import React, { useState } from 'react';

function Logo(props) {
    const [dataLogo] = useState([
        {
            id: 1,
            name: 'GREEN CAP'
        },
        {
            id: 2,
            name: 'GREEN CAP'
        },
        {
            id: 3,
            name: 'GREEN CAP'
        },
        {
            id: 4,
            name: 'GREEN CAP'
        },
        {
            id: 5,
            name: 'GREEN CAP'
        },
        {
            id: 6,
            name: 'GREEN CAP'
        },
        {
            id: 7,
            name: 'GREEN CAP'
        },
        {
            id: 8,
            name: 'GREEN CAP'
        },
        {
            id: 9,
            name: 'GREEN CAP'
        },
        {
            id: 10,
            name: 'GREEN CAP'
        },
    ])
    return (
        <section className="logo-slider" id='METAVERSO'>
            <div className="logo-slider-wrap">
                <div className="logo-slider-inner">
                    {
                        dataLogo.map(idx => (
                            <h3 key={idx.id}>{idx.name}</h3>
                        ))
                    }

                </div>
                <div className="logo-slider-inner style-2">
                    {
                        dataLogo.map(idx => (
                            <h3 key={idx.id}>{idx.name}</h3>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Logo;