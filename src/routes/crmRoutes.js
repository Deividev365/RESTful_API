import {
    addNewContact,
    getContacts,
    getContactById,
    updateContact,
    deleteContact } from '../controllers/crmController';


export const routes = (app) => {
    
    app.route('/contact')

        .get((req, res, next) => {
            
            console.log(`Original URL from: ${req.originalUrl}`);
            console.log(`Request method: ${req.method}`);

            res.send("Listar Contatos");
            next();  

        }, getContacts )


        .post(addNewContact);


    app.route('/contact/:contactId')

        .get(getContactById)

        .put(updateContact)

        .delete(deleteContact)
}

