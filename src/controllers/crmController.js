import mongoose from "mongoose";
import {contactSchema} from '../models/crmModel';

const Contact = mongoose.model("Contact Schema", contactSchema )


export const addNewContact = (req, res) => {


    let newContact = new Contact(req.body);

    newContact.save(err, Contact => {
        
        if(err) {
            res.send(err);

        } else {

            res.json(Contact)
        }
    })



}