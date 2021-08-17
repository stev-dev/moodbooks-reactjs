import React from 'react'
import tags from '../helper'
import { useEffect } from 'react'
import { useHistory } from 'react-router'

export default function BookTags(props) {
    const history = useHistory()

    const attachEventListeners = () => {
        for (let i = 0; i<18; i++){
            let tagi = "tag"+i
            let currentElem = document.getElementById(tagi)
            currentElem.addEventListener("click", () => {
                props.categorySearch(currentElem.innerHTML)
                history.push('/booksBySubject')
            })
        }
    }
    
    useEffect(()=>{
        attachEventListeners()
    },[attachEventListeners])

    document.addEventListener("DOMContentLoaded", function () {
        attachEventListeners()
    })

    return (
        <div id="tags-box" style={{marginBottom:'15px'}}>
            {tags.map((tag, indx) => <button key={indx} className="tag" id={"tag"+indx} >{tag}</button>)}
        </div>
    )
}
