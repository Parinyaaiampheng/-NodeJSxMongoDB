const express = require("express");
const router = express.Router();

const {
    postBooks,
    putBooks,
    deleteBook,
    getBooks,
    getBook,

} = require("../controllers/bookController");

router.post("/", postBooks);
router.put("/:id", putBooks);
router.delete("/:id", deleteBook);
router.get("/", getBooks);
router.get("/:genre", getBook);



module.exports = router;