import React from "react";
import {Song} from "../../types";
import TunesSong from "./TunesSong";
import "./TunesList.scss";


interface Props {

    songs: Song[]
}

const TunesList: React.FC<Props> = (props) => {
    const {songs} = props;

    return (

        <ul>{songs.map(song => (<li key={song.id}><TunesSong song={song}/></li>))}
        </ul>
    )

};

export default TunesList;
