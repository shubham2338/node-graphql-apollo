import express from 'express';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import {expressMiddleware } from '@apollo/server/express4';

import cors from 'cors';
import {resolvers} from '../src/resolvers.js';
import {typeDefs } from '../src/schema.js';


const PORT = 3001;

const app = express();

app.use(cors(), express.json())



const server = new ApolloServer({typeDefs,resolvers});
// const {url} = await startStandaloneServer(server, {listen: {port: 3000}});

await server.start();

app.use('/graphql',expressMiddleware(server))

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
    console.log(`graphql server is running: http://localhost:${PORT}/graphql`);
})

