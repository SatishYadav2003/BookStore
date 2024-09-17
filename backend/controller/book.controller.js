import bookModel from "../model/book.model.js";

export const getBook = async (req, res) => {

    try {
        const bookRecords = await bookModel.find({});

        res.status(200).json(bookRecords)
    }
    catch (error) {
        console.log("Error occured:", error)
        res.status(500).json(error)
    }
}

