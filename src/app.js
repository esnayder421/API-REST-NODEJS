import express from 'express';

import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'
import cors from 'cors'





const app = express();
app.use(cors());

app.use(cors({
    origin: 'https://api-rest-nodejs-production.up.railway.app/employee', // use your actual domain name (or localhost), using * is not recommended
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
    credentials: true
}))
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authortization');
    res.setHeader('Acces-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
})
app.use(x => x
    .AllowAnyMethod()
    .AllowAnyHeader()
    .SetIsOriginAllowed(origin => true) // allow any origin 
    .AllowCredentials());




//con esta linea de codigo interpreto los json y se los paso a las rutas
app.use(express.json());


app.use(indexRoutes);

app.use(employeesRoutes);


app.use((req,res, next)=>{
    res.status(404).json({
        "message": "Not Fount"
    })
})

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 
 app.use(cors(corsOptions)) // Use this after the variable declaration
 console.log('configuration ok')

export default app