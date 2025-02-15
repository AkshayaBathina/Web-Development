const booksData = [
    {
        "bookId": 101,
        "title": "JavaScript: The Good Parts",
        "author": {
            "name": "Douglas Crockford",
            "birthDate": "1947-12-15",
            "nationality": "American"
        },
        "publisher": {
            "name": "O'Reilly Media",
            "yearFounded": 1980,
            "location": "USA"
        },
        "genres": ["Programming", "Web Development", "JavaScript"],
        "reviews": [
            {
                "user": "Alice",
                "rating": 5,
                "comment": "A must-read for every JavaScript developer!",
                "date": "2021-05-10"
            },
            {
                "user": "Bob",
                "rating": 4,
                "comment": "Great book but could include more examples.",
                "date": "2021-06-15"
            }
        ],
        "price": {
            "currency": "USD",
            "amount": 30.99
        },
        "available": true,
        "languages": ["English", "Spanish"],
        "tags": ["beginner", "web dev"]
    },
    {
        "bookId": 102,
        "title": "The Pragmatic Programmer",
        "author": {
            "name": "Andrew Hunt",
            "birthDate": "1960-12-21",
            "nationality": "American"
        },
        "publisher": {
            "name": "Addison-Wesley",
            "yearFounded": 1942,
            "location": "USA"
        },
        "genres": ["Programming", "Software Development", "Tech"],
        "reviews": [
            {
                "user": "Charlie",
                "rating": 5,
                "comment": "One of the best books on software engineering.",
                "date": "2020-07-11"
            },
            {
                "user": "Dave",
                "rating": 4,
                "comment": "Useful but a bit dated in some concepts.",
                "date": "2022-01-22"
            }
        ],
        "price": {
            "currency": "USD",
            "amount": 39.99
        },
        "available": false,
        "languages": ["English"],
        "tags": ["advanced", "software engineering"]
    },
    {
        "bookId": 103,
        "title": "Clean Code",
        "author": {
            "name": "Robert C. Martin",
            "birthDate": "1952-12-05",
            "nationality": "American"
        },
        "publisher": {
            "name": "Prentice Hall",
            "yearFounded": 1913,
            "location": "USA"
        },
        "genres": ["Programming", "Software Engineering", "Best Practices"],
        "reviews": [
            {
                "user": "Eve",
                "rating": 5,
                "comment": "Transformative book on writing clean code.",
                "date": "2023-01-02"
            },
            {
                "user": "Frank",
                "rating": 4,
                "comment": "Extremely valuable, but challenging for beginners.",
                "date": "2023-01-10"
            }
        ],
        "price": {
            "currency": "USD",
            "amount": 45.50
        },
        "available": true,
        "languages": ["English", "French", "German"],
        "tags": ["advanced", "best practices"]
    }
]

/*Challenge: Find all available books
Write a JavaScript function findAvailableBooks that takes the bookstore array as input and returns a list of all available books (i.e., books where available is true)*/
const findAvailableBooks = (booksData) => {
    return booksData.filter(book => book.available === true)
    .map(book => book.title)
}
console.log(findAvailableBooks(booksData))

/*Challenge: Get average rating for a book
Write a JavaScript function getAverageRating that takes a bookId and returns the average rating of that book. If the book doesn't exist or has no reviews, return null */
const getAverageRating = (bookId) => {
    const book = booksData.find(book => book.bookId === bookId);
   
    if (!book || !book.reviews.length){return null};
   
    return book.reviews.reduce((sum, review) => sum + review.rating, 0) / book.reviews.length;
};
console.log(getAverageRating(103));
console.log(getAverageRating(102));
console.log(getAverageRating(100));

/*Challenge: Books by a specific author
Write a JavaScript function getBooksByAuthor that takes an author's name as input and returns all the books written by that author.*/
const getBooksByAuthor = (authorName) => {
   return booksData.filter(book => book.author.name === authorName)
   .map(book => book.title);
   
}

console.log(getBooksByAuthor('Robert C. Martin'))
/*Challenge: Books published by a specific publisher
Write a JavaScript function getBooksByPublisher that takes a publisher name as input and returns all books published by that publisher.*/

const getBooksByPublisher = (publisherName) => {
    return booksData.filter(book => book.publisher.name === publisherName)
    .map(book => book.title);
}

console.log(getBooksByPublisher("Addison-Wesley"));

/*Challenge: Filter books by genre
Write a JavaScript function filterBooksByGenre that takes a genre as input and returns all books that belong to that genre. Consider that a book can belong to multiple genres.*/

const filterBooksByGenre = (genre) => {
    return booksData.filter(book => book.genres.includes(genre))
    .map(book => book.title)
}

console.log(filterBooksByGenre("Programming"));

/*Challenge: Books with price less than a certain amount
Write a JavaScript function getBooksBelowPrice that takes a price limit (e.g., 40) and returns all books with a price lower than the specified amount.*/
const getBooksBelowPrice = (pricelimit) => {
    return booksData.filter(books => books.price.amount < pricelimit)
    .map(books => ({title:books.title, price: books.price.amount}))
}

console.log(getBooksBelowPrice(40));
/*Challenge: Get books with more than a certain number of reviews
Write a JavaScript function getBooksWithMoreThanReviews that takes a number (e.g., 1) as input and returns all books that have more than the specified number of reviews.*/
const getBooksWithMoreThanReviews = (numberofreviews) => {
    return booksData.filter(book => book.reviews.length > numberofreviews)
    .map(book => ({title: book.title, numofreviews: book.reviews.length}))
};
console.log(getBooksWithMoreThanReviews(1));

// /* Challenge: Find the most popular book (based on average rating)
// Write a JavaScript function getMostPopularBook that returns the book with the highest average rating.*/
const getMostPopularBook = () => {
    return booksData.reduce((best, book) => {
        const avgRating = book.reviews.length 
            ? book.reviews.reduce((sum, review) => sum + review.rating, 0) / book.reviews.length 
            : 0;
        return avgRating > (best.avgRating || 0) ? { title:book.title, avgRating } : best;
       
    }, {})
   
};

console.log(getMostPopularBook());

/*Challenge: Get books in multiple languages
Write a JavaScript function getBooksInLanguages that takes an array of languages (e.g., ["English", "Spanish"]) and returns all books available in at least one of those languages.*/

const getBooksInLanguages = (languages) => {
    return booksData.filter(book => book.languages.some(language => languages.includes(language)))
.map(book => ({title:book.title, languages:book.languages}));
}

console.log(getBooksInLanguages(["French", "Spanish"]));

/* Challenge: Find the most expensive book
Write a JavaScript function getMostExpensiveBook that returns the book with the highest price.*/
const getMostExpensiveBook = () => {
    return booksData.reduce((max, book) => 
        book.price.amount > max.price ? ({title:book.title, price: book.price.amount}) : max,{title:null, price:0}
    )
   
};
console.log(getMostExpensiveBook());

/*Challenge: Sort books by rating
Write a JavaScript function sortBooksByRating that sorts the books by their average rating in descending order.*/
const getRating = (book) => 
    book.reviews.length 
        ? book.reviews.reduce((sum, review) => sum + review.rating, 0) / book.reviews.length 
        : 0;

const sortBooksByRating = (booksData) => {
    return booksData.sort((a, b) => getRating(b) - getRating(a))
    .map(book => ({ title: book.title, avgRating: getRating(book) }));;
};

console.log(sortBooksByRating(booksData));




