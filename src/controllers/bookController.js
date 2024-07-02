import book from "../models/Book.js";

class BookController {

    static async listBooks (req, res) {
        try {
            const books = await book.find({});
            res.status(200).json(books);
        } catch (e) {
            res.status(500).json( { message: e.message } );
        }
    };

    static async createBook(req, res) {
        try {
            const newBook = await book.create(req.body);
            res.status(201).json({ message: "Created.", book: newBook });
        } catch (e) {
            res.status(500).json( { message: e.message } );
        }
    };

    static async getBookById(req, res) {
        try {
            const bookFound = await book.findById(req.params.id);
            res.status(200).json(bookFound);
        } catch (e) {
            res.status(500).json( { message: e.message } );
        }
    };

    static async updateBook (req, res) {
        try {
            await book.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json( { message: "Book updated." });
        } catch (e) {
            res.status(500).json( { message: e.message } );
        }
    };

    static async deleteBook (req, res) {
        try {
            await book.findByIdAndDelete(req.params.id);
            res.status(200).json( { message: "Book deleted." });
        } catch (e) {
            res.status(500).json( { message: e.message } );
        }
    };
};

export default BookController;