//usei o express para criar e configurar meu servidor
const express = require('express');
const server = express();

const db = require('./db');

//configurar arquivos estaticos( css, scripts.imagens)
server.use(express.static("public"))

// habilitar uso do req body
server.use(express.urlencoded({ extended: true }))

//configuração do nunjucks
const nunjucks = require('nunjucks');
nunjucks.configure('views', {
    express: server,
    noCache: true, // boolean 
})

//criei uma rota
//e capturo o pedido do cliente para responder
server.get('/', function(req, res){

    db.all(`SELECT * FROM ideas`, function(err, rows){
        if (err) {
            return res.send('Erro no banco de dados!')
        }

        const reversedIdeas = [...rows].reverse()

        let lastIdeas = []
        for (let idea of reversedIdeas){
            if (lastIdeas.length < 2) {
                lastIdeas.push(idea)
            } 
        }
    
        lastIdeas = lastIdeas
    
        return res.render("index.html", { ideas: lastIdeas })
    })    
})

server.get('/ideias', function(req, res){
    db.all(`SELECT * FROM ideas`, function(err, rows){

        if (err) {
            console.log(err)
            return res.send('Erro no banco de dados!');
        }
        const reversedIdeas = [...rows].reverse()

        return res.render("ideias.html", { ideas: reversedIdeas})
    })

})

server.post('/', function(req, res) {
    const query = `
        INSERT INTO ideas (
            image, 
            title, 
            category,
            description,
            link
        ) values (?,?,?,?,?);
    `
    const values = [
        req.body.image,
        req.body.title,
        req.body.category,
        req.body.description,
        req.body.link,
    ]

    db.run(query, values, function(err){
        if (err) {
            return res.send('Erro no banco de dados!')
        }

        return res.redirect('/ideias');
    })
})

// server.delete('/ideias/:id', function(req, res){

//     const deleteIdea = `DELETE FROM ideas where id = ?`
//     db.run(deleteIdea, [1], function(err){

//         if (err) {
//             return res.send('Erro ao deletar registro')
//         }

//         return res.redirect('/ideias')
//     })

// })
    

// Liguei meu servidor na porta 3000
server.listen(3000);