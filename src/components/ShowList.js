import React from 'react';
import ShowCard from './ShowCard';

const ShowList = props => {
    const shows = props.shows.map((show) => {
        // console.log(show.show)
        return <ShowCard key={show.show.id} data={show.show} />
    });

    return <div>{shows}</div>
};

export default ShowList;