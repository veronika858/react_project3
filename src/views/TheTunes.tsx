import React, {useState} from "react";
import {Song} from "../types";
import axios from "axios";
//children
import TunesSearchForm from "../components/tunes/TunesSearchForm";
import TunesList from "../components/tunes/Tunes.List";

//data types
interface SongFormITunes {
    trackId: number
    artistName: string
    previewUrl: string
    artworkUrl100?: string
    trackName: string
    collectionName: string
    kind?: string
}

const TheTunes: React.FC = () => {
    //state
    const [songs, setSongs] = useState([]);

    //callback
    const handleSearch = (query: string) => {
        axios.get(
            `https://itunes.apple.com/search
				?term=${encodeURI(query)}
				&entity=musicTrack
				&limit=5`
        ).then((response) => {
            let iTunesSongs = response.data.results
                .filter((song: SongFormITunes) => song.kind === "song")
                .map((song: SongFormITunes) => extractData(song));
            setSongs(iTunesSongs);
        })
    };

    const extractData = ({
                             trackId: id,
                             artistName: artist,
                             previewUrl: audioFile,
                             artworkUrl100: artwork,
                             trackName: title,
                             collectionName: album
                         }: SongFormITunes) => {
        return {id, artist, audioFile, artwork, title, album} as Song
    };

    return (
        <article className="tunes itunes">
            <h1>iTunes</h1>
            <TunesSearchForm onSearch={handleSearch}/>
            <TunesList songs={songs}/>
        </article>
    )
};

export default TheTunes;
