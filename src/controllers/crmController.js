import mongoose from "mongoose";
import {contactSchema} from '../models/crmModel';

const Contact = mongoose.model("contacts", contactSchema);


export const addNewContact = (req, res) => {

    let newContact = new Contact(req.body);

    newContact.save((err, Contact) => {
       if(err) {
        res.send(err);

       } else {

           res.json(Contact)
       }
    });

};

export const getContacts = (req, res) => {
    Contact.find({}, (err, Contact) => {

        if(err) {
            res.send(err);
    
           } else {
    
               res.json(Contact)
           }

    })
};


export const getContactById = (req, res) => {

    Contact.findById(req.params.contactId, (err, Contact) => {
        
        if(err) {
            res.send(err);
    
           } else {
    
               res.json(Contact)
           }
    } )
};



export const updateContact = (req, res) => {
    
    Contact.findOneAndUpdate({ _id: req.params.contactId}, req.body, { new: true }, (err, Contact) => {

        if(err) {
            res.send(err);
        } else {

            res.json(Contact)
        }
    });

}

export const deleteContact = (req, res) => {

    Contact.remove({_id: req.params.contactId}, (err) => {

        if(err) {
            res.send(err);
            
        } else {

            res.json(`Sucessfully deleted ID: ${req.params.contactId}`)
        }
    })
}