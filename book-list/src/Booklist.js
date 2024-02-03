const Booklist = () =>{
    const books = ["The Alchemist", "The Art of War", "The 48 Laws of Power"];

    return (
        <div>
            <h1>Booklist</h1>
            <ul>
                {books.map((book, index) => (
                    <li key={index}>{book}</li>
                ))}
            </ul>


        </div>

    );

}

export default Booklist;
