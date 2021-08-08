import React from 'react'
import tags from '../helper'

export default function BookTags() {
    return (
        <div id="tags-box">
            {tags.map((tag, indx) => <button key={indx} className="tag" /**onClick="categorySearch(event)"**/>{tag}</button>)}
        </div>
    )
}
