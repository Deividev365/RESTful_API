import {addNewContact} from '../controllers/crmController';

const routes = (app) => {

    app.route('/contact')

        
        .get((req, res, next) => {
            
            // middleware
            console.log(`Original URL from: ${req.originalUrl}`);
            console.log(`Request method: ${req.method}`);
            next();    
        }, (req, res, next) => {

            res.send("GET REQUEST SUCESSFUL!");

        })


        .post(addNewContact);

    app.route('/contact/:contactId')

        .put((req, res) => {
            res.send("Contato editado com sucesso")
        })

        .delete((req, res) => {

            res.send("Contado Deletado com sucesso");
        })



    }

export default routes;