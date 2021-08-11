import React, {useEffect}from 'react'
import { useHistory } from 'react-router';
import '../App.css'

export default function JumboSection(props) {
    const history = useHistory()

    useEffect(() => {
        const listener = e => {
            if(document.getElementById("query-area").value){
                if (e.code === "Enter" || e.code === "NumpadEnter") {
                e.preventDefault();
                props.search()
                history.push("/book")
                }
            }
        }
        document.getElementById("query-area").addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        };
    }, [props, history]);



    return (
        <div id="jumbotron-background" style={jumbotronBackground}>
            <h1 id="moodbooksLogo" style = {moodbooksLogo}>Moodbooks</h1>
            <h2 id="whatToReadNext">Discover what to read next ...</h2>
            <div className="search-container">
                <input type="text" id ="query-area" placeholder="type the title of the book you want to read"/>
                {/*<button id="submit" onClick={props.search}>&#x1f50D;</button>*/}
            </div>
        </div>
    )
}

const jumbotronBackground = {
    height:'auto',
    textAlign: 'center',
    color: 'white',
    fontFamily: 'monospace, Lucida Console, Courier',
    marginBottom: 15,

}
const moodbooksLogo = {
    fontFamily: 'SweetHipster, monospace',
    fontWeight: 'bolder',
    fontSize: 64,
    marginTop: 0,
    textshadow: '5px 5px 1px #07bccc, 10px 10px 2px #f40468, 15px 15px 10px #482896'
} 