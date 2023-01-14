const routes = (app) => {

    app.route('/contact')
        
        .get((req, res) => {
            res.send("GET REQUEST SUCESSFUL!");
        })

        .post((req, res) => {
            res.send("POST REQUEST SUCESSFUL");
        })

    app.route('/contact/:contactId')

        .delete((req, res) => {
            
            res.send("Contado Deletado com sucesso");
        })



}