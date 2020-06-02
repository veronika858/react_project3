import React, {FormEvent, useRef} from "react";
import {debounce} from 'lodash-es';
//styles
import "./TunesSearchForm.scss";

//props
interface Props {
    onSearch: (query: string) => void;
}

//component
const TunesSearchForm: React.FC<Props> = props => {

    const searchInput = useRef<HTMLInputElement>(null);
    const handleInput = debounce((event: React.ChangeEvent<HTMLInputElement>) => {
        searchFormMusic();
    }, 500);
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        searchFormMusic();

    };
    //search for music
    const searchFormMusic = () => {
        let searchString = searchInput.current?.value;
        if (searchString) props.onSearch(searchString);
        //console.log(searchInput.current?.value);
    };

    //template
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input autoFocus type="text" ref={searchInput} onChange={handleInput} className="search"/>
            </form>
        </div>
    );
}

export default TunesSearchForm;
