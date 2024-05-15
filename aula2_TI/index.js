const http = require ('http');
const server = http.createServer((req,res) =>{
    const{url} = req;
    console.log(url);
    if(url==='/') {
        res.end('Olá eu sou node j.s');
    } else if(url === '/contact') {
        res.end('Pagina de Contato');
    } else if(url === '/about') {
        res.end('Pagina sobre o assunto');
    } else {
        res.writeHead(404)
        res.end('Página não encontrada !!!');
    }
});

server.listen(3002, () => {
    console.log('Servidor Rodando na Porta 3002');
});