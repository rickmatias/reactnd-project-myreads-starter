# MyReads Project

This is a simple app created as a project for Udacity's React Fundamentals course. The goal of this app is organize a virtual book case that has 3 different shelves named as 'Want to read', 'Currently reading' and 'Read'. You can change a book from one shelf to another and you can search for other books and include in you book case as well.

## TL;DR

If you want to have a copy of this app or want to continue developing this app, just do this steps:

* make a clone of this app by git clone https://github.com/udacity/reactnd-project-myreads-starter.git
* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for the app. Feel free to customize this as you desire.
    ├── App.js # This is the root of the app.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── Books.js # A React Component that represents a book. Usually a book sits on a shelf
    ├── Bookcase.js #A React Component that represents a bookcase that has one or more shelves.
    ├── BookGrid.js #A React Component that represents a bookgrid that has one or more books. That component was created to better reutilization of code.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── BookSelector.js #A React Component that represents a select when the user can choose the destination shelf to that specific book.
    ├── BookShelf.js #A React Component that represents a shelf where one or more books sits on.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
    ├── SearchBooks.js #A React Component that represents the Search Page.
    ├── SearchBooksBar.js #A React Component that represents the top bar on Search Page
    ├── SearchBooksResults.js #A React Component that represents the result of search on Search Page
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

Unfurtely you can not contribute to this app.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
