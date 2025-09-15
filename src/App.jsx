import BookCard from "./BookCard";
import "./index.css";

function App() {
    return (
        <>
            <div className="app">
                <div className="header">
                    <h1>Book Shop Catalog</h1>
                </div>
                <div className="content">
                    <BookCard
                        book={{
                            title: "Head First Java, 3rd Edition",
                            author: "Kathy Sierra, Bert Bates, Trisha Gee",
                            price: "$42.27 - $45.00",
                            image: "https://itbook.store/img/books/9781491910771.png",
                            link: "https://itbook.store/books/9781491910771",
                        }}
                    />
                    <BookCard
                        book={{
                            title: "Native Mobile Development",
                            author: "Shaun Lewis, Mike Dunn",
                            price: "$32.77 - $38.70",
                            image: "https://itbook.store/img/books/9781492052876.png",
                            link: "https://itbook.store/books/9781492052876",
                        }}
                    />
                    <BookCard
                        book={{
                            title: "ScratchJr Coding Cards",
                            author: "Marina Umaschi Bers, Amanda Sullivan",
                            price: "$14.99 - $19.37",
                            image: "https://itbook.store/img/books/9781593278991.png",
                            link: "https://itbook.store/books/9781593278991",
                        }}
                    />
                </div>

                <div className="btn">
                    <button>Load More!</button>
                </div>

                <div className="footer">
                    <div>Leana Le © 2025 Book Shop</div>
                </div>
            </div>
        </>
    );
}

export default App;
