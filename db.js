const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./ws.db');

db.serialize(function() {

    // // criar a tabela 
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS ideas(
    //         id INTEGER PRIMARY KEY AUTOINCREMENT ,
    //         image TEXT, 
    //         title TEXT,
    //         category TEXT,
    //         description TEXT,
    //         link TEXT
    //     );
    // `)
// //     // inserir dados na tabela
//     const query = `
//     INSERT INTO ideas (
//         image, 
//         title, 
//         category,
//         description,
//         link
//     ) values (?,?,?,?,?);
// `
//     const values = [
//         "https://www.flaticon.com/br/premium-icon/icons/svg/2853/2853446.svg",
//         "Cursos de Programação",
//         "Estudo",
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat soluta asperiores dolores maxime fugiat quasi perspiciatis.",
//         "http://rocketseat.com.br"
//     ]

//     db.run(query, values, function(err){
//         if (err) return console.log(err)

//         console.log(this)
//     })

    // deletar um dado da tabela
    // db.run(`DELETE FROM ideas WHERE  id = ?`, [1], function(err){
    //     if (err) return console.log(err)

    //     console.log("DELETEI O REGISTRO", this)
    // })


    // // consultar dados na tabela
            // db.all(`SELECT * FROM ideas`, function(err, rows){
            //     if (err) return console.log(err)

            //     console.log(rows)
            // })
    


})

module.exports = db;