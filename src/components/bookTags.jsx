import React from 'react'
import tags from '../helper'

export default function BookTags(props) {
    //returnedTags.map(elem => elem.addEventListener("click", elem => console.log(elem)))
    document.addEventListener("DOMContentLoaded", function () {
        for (let i = 0; i<18; i++){
            let tagi = "tag"+i
            let currentElem = document.getElementById(tagi)
            document.getElementById(tagi).addEventListener("click", () => props.categorySearch(currentElem.innerHTML))
        }
    })

    return (
        <div id="tags-box">
            {tags.map((tag, indx) => <button key={indx} className="tag" id={"tag"+indx} >{tag}</button>)}
        </div>
    )
}
