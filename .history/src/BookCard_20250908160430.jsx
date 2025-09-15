function BookCard({ book }) {
    return (
        <div className="card">
            <a href={book.link}>
                <div className="image">
                    <img
                        src={book.image}
                        alt={book.title}
                    />
                </div>
                <div className="title">
                    <h2>{book.title}</h2>
                </div>
                <div className="author">
                    <p>Author: {book.author}</p>
                </div>
                <div className="price">
                    <p>Price: {book.price}</p>
                </div>
            </a>
        </div>
    );
}

export default BookCard;
