import express from 'express';

import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'
import cors from 'cors'





const app = express();
app.use(cors());

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