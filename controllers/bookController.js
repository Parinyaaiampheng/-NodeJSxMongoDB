// Import Model
const express = require("express");
const Book = require("../models/books");

// Function add and export
exports.postBooks = async (req, res) => {
    try {
        const newBook = new Book(req.body);
        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Function update and export
exports.putBooks = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
            new: true
        });
        if (!updatedBook) return res.status(404).json({
            message: 'Book not found'
        });
        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Function delete and export
exports.deleteBook = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const book = await Book.findById(id);
        if (!book) return res.status(404).json({
            message: 'Book not found'
        });
        await Book.findByIdAndDelete(id);
        res.json({
            message: 'Book deleted successfully'
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};
// Function get all data and export
exports.getBooks = async (req, res) => {
    try {
        const filter = req.query;
        const Books = await Book.find(filter);
        res.status(200).json(Books);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
// Function get data by genre and export
exports.getBook = async (req, res) => {
    try {
        const {
            genre
        } = req.params;
        const book = await Book.findOne({
            genre: genre
        });
        if (!book) return res.status(404).json({
            message: 'Book not found'
        });
        res.json(book);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};