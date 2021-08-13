import React, {useEffect} from 'react'
import tags from '../helper'
import { useHistory } from 'react-router-dom'

export default function BookTags(props) {

    const history = useHistory()

    // useEffect(()=>{
    // },[props, history])

    document.addEventListener("DOMContentLoaded", function () {
        for (let i = 0; i<18; i++){
            let tagi = "tag"+i
            let currentElem = document.getElementById(tagi)
            document.getElementById(tagi).addEventListener("click", () => {
                console.log("clicked from the tag eventListener")
                props.categorySearch(currentElem.innerHTML)
                history.push('/booksBySubject')
            })
        }
    })

    return (
        <div id="tags-box">
            {tags.map((tag, indx) => <button key={indx} className="tag" id={"tag"+indx} >{tag}</button>)}
        </div>
    )
}
