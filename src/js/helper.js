let htmlContentRegex = />\w+\s?\w+</g

let searchStr = `>Science</button>
<button class="tag" onclick="categorySearch(event)">Art</button>
<button class="tag" onclick="categorySearch(event)">Thrillers</button>
<button class="tag" onclick="categorySearch(event)">Plays</button>
<button class="tag" onclick="categorySearch(event)">Music</button>
<button class="tag" onclick="categorySearch(event)">Technology</button>
<button class="tag" onclick="categorySearch(event)">Medicine</button>
<button class="tag" onclick="categorySearch(event)">Mystery</button>
<button class="tag" onclick="categorySearch(event)">Detective stories</button>
<button class="tag" onclick="categorySearch(event)">History</button>
<button class="tag" onclick="categorySearch(event)">Children</button>
<button class="tag" onclick="categorySearch(event)">Textbooks</button>
<button class="tag" onclick="categorySearch(event)">Biographies</button>
<button class="tag" onclick="categorySearch(event)">Science Fiction</button>
<button class="tag" onclick="categorySearch(event)">Recipes</button>
<button class="tag" onclick="categorySearch(event)">Fantasy</button>
<button class="tag" onclick="categorySearch(event)">Romance</button>
<button class="tag" onclick="categorySearch(event)">Classic Books<"`

let matches = [...searchStr.match(htmlContentRegex)]
let htmlTags = matches.map(elem => elem.slice(1,-1))
export default htmlTags