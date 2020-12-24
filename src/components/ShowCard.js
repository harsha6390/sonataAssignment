import React, { useState } from 'react';
import axios from 'axios';

const ShowCard = props => {
    // const [sesaons, setSeasons] = useState([]);
    // const [showEpisode, setShowEpisode] = useState(false);

    let imageURL = '';
    let summary = '';
    const regex = /(<([^>]+)>)/ig;


    const onSearchEpisode = async (episodeID) => {
        let url = `http://api.tvmaze.com/shows/${episodeID}/seasons`;
        const responseSeason = await axios.get(url, {});
        // console.log(response.data);
        const seasonList = responseSeason.data.map((season) => {
            console.log(season)
            return (season.number);
        });

        // setSeasons(seasonList);
        // console.log(seasons);

        // let url = `https://api.tvmaze.com/seasons/${episodeID}/episodes`;
        // const response = await axios.get(url, {});
        // console.log(response.data);
        // response.data.map((episode) => {
        //     console.log(episode)
        //     return (
        //         <div>
        //             season
        //         </div>
        //     );
        // });

        // setShowEpisode(true);
    }

    if (props.data.image !== null)
        imageURL = props.data.image.medium;

    if (props.data.summary !== null)
        summary = props.data.summary.replace(regex, '');

    return (
        <div className="ui two column doubling stackable grid container">
            <div className="column">
                <img alt={props.data.name} src={imageURL} />
            </div>
            <div className="column">
                <h3>{props.data.name}</h3>
                <p>{summary}</p>
                <button className="ui secondary button" onClick={() => onSearchEpisode(props.data.id)}>Show Episodes</button>
            </div>
        </div>
    );
};

export default ShowCard;