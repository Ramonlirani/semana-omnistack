//Servidor
const express = require('express') //constante para nao ficar repetindo o codigo
const server = express()  //constante para nao ficar repetindo o codigo

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

//configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true, //guardar em memoria algo, nessa opção esta desativada
})

//Inicio e configuração do servidor
server
//receber os dados do req.body
.use(express.urlencoded({ extended: true}))
//configurar arquivos estaticos(css, scripts, imagens)
.use(express.static("public")) //configuração do servidor, rotas de aplicação
.get("/", pageLanding) 
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//start do servidor
.listen(5500) 