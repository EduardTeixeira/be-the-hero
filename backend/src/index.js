const express = require('express');
const cors = require('cors');
const routes = require('./routes')

const app = express();

/**
 * 
 * Quando for subir o projeto em produção, o interessante é
 * alterarmos o origin para o domínio em que será hospedado.
 * 
app.use(cors({
    origin: 'http://meudominio.com.br',
}));
 */
app.use(cors());
app.use(express.json());
app.use(routes);

/*
    * Rota / Recurso
*/

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para cirar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users;
 * Query Builder: table('users).select('*).where()
 */

app.listen(3333);