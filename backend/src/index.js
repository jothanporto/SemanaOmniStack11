const express = require ('express');
const cors = require ('cors');
const routes = require ('./routes');
const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333); 
/** 
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar/listar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar um informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipo de parâmetros:
   * 
   * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
   * Route Params: Parâmetros utilizados para identificar recursos
   * Request Body: Corpo da requisição, 
   */

/**
 * SQL: MySQL, SQLite,PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */


