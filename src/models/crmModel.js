import mongoose from "mongoose";

const Schema = mongoose.Schema;

/* Schema model to create database colu */
export const contactSchema = new Schema({

    firstName: {
        type: String,
        required: 'Enter a first name'
    },

    lastName: {
        type: String,
        required: 'Enter a last name'
    },

    email: {
        type: String,
        required: 'Enter your e-mail'

    },

    company: {
        type: String,
        required: 'Enter the company name'

    },

    phone: {
        type: Number,
        required: 'Enter the phone number'

    },

    created_date: {
        type: Date,
        default: Date.now
    }
});    