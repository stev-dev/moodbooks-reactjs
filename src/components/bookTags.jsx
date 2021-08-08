import React from 'react'
import tags from '../helper'

export default function BookTags() {
    return (
        <div id="tags-box">
            {tags.map(tag => <button class="tag" onclick="categorySearch(event)">{tag}</button>)}
        </div>
    )
}
