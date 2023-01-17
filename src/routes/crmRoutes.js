import {addNewContact, getContacts, getContactById, updateContact, deleteContact} from '../controllers/crmController';

const routes = (app) => {

    app.route('/contact')


        .get((req, res, next) => {
            
            // middleware
            console.log(`Original URL from: ${req.originalUrl}`);
            console.log(`Request method: ${req.method}`);
            next();  

        }, getContacts)


        .post(addNewContact);








    app.route('/contact/:contactId')

    // get specific contact
    .get(getContactById)



    
        .put(updateContact)

        
        .delete(deleteContact)



    }

export default routes;