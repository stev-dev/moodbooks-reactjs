import BookHeader from './BookHeader'
import BookCard from './BookCard'
import logo from '../res/circle-physic.gif'

export default function SingleBook(props) {

    return (
        props.title === "" ? 
        <div style={{textAlign:'center', marginTop:'15%'}}>
            <img src={logo} alt="loading..." style={{maxWidth:'90px',maxHeight:'90px'}}/>
        </div> 
        : 
        <div>
            <BookHeader subject = {props.subject} />
            <BookCard custumBookCardStyle = {cardStyleSingleBook}
            title ={props.title}
            author = {props.author}
            publishYear = {props.publishYear} 
            isbn = {props.isbn}
            editionKey = {props.editionKey}
            />
        </div>
    )
}
const cardStyleSingleBook = {
    margin: '10px auto',
    width: '30%',
    background: 'radial-gradient(#1fe4f5, #3fbafe)',
    boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.25)',
    transition: 'all 0.5s',
    padding: '15px',
    borderRadius: '10px',
    textAlign: 'center'
}