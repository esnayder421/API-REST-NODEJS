import express from 'express';

import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'




const app = express();

//con esta linea de codigo interpreto los json y se los paso a las rutas
app.use(express.json());


app.use(indexRoutes);

app.use(employeesRoutes);


app.use((req,res, next)=>{
    res.status(404).json({
        "message": "Not Fount"
    })
})

export default app