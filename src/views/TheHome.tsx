import React, {useState} from "react";
import logo from '../logo.svg';

const TheHome: React.FC = () => {
    const [title] = useState(" React :)");
    return (
        <div className="home">
            <h1>{title}</h1>
            <img src={logo} className="App-logo" alt="logo"/>
            <p>Hot singles in your area.</p>
            <p>Hottes react in your&nbsp;
                <a href="https://reactjs.org/docs" target="_blank" rel="noopener noreferrer">
                    documentation.
                </a>
            </p>
        </div>
    )
}
export default TheHome;
