const Booklist = (props) =>{
    

    return (
        <div>
            <h1>Booklist</h1>
            <ul>
                {props.books.map((book, index) => (
                    <li key={index}>{book}</li>
                ))}
            </ul>


        </div>

    );

}

export default Booklist;
