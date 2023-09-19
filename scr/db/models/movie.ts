import mongoose from "mongoose";

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {
        type: String,
        required: true,  // обязательное поле
    },
    director: {
        type: String,
        required: true,  // обязательное поле
    },
    year:  {
        type: Number,
        required:true,
    },
    genres: [String],   // Жанр; массив строк
    raiting: Number,
    duration: {
        hours:Number,
        minutes:Number
    },
    revievs: [{
        name:String,
        text:String
    }]
})

const Movie = mongoose.model('Movie',   movieSchema)

module.exports = Movie;