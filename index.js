const express= require('express');
const app= express();
const cors = require('cors');
require('dotenv').config();
const {dbConnection}= require("./config/dbConnection")


app.use(cors({
  origin: "https://proyecto-final-4483a.web.app"
}));
/*{
  origin: "https://proyecto-final-4483a.web.app"
}*/

app.use(express.json());


const loginroutes= require('./routes/usuarioLoginRoute');
const proveedorroutes= require('./routes/proveedorRoute');
const productoroutes= require('./routes/productoRoute');
const carritoroutes= require('./routes/carritoRoute');
const pedidoroutes= require('./routes/pedidoRoute');


//const PORT = process.env.PORT || 3001;

app.use('/api/login',loginroutes)
app.use('/api/proveedor',proveedorroutes)
app.use('/uploads', express.static('uploads'));
app.use('/api/producto',productoroutes)
app.use('/api/carrito',carritoroutes)
app.use('/api/pedido',pedidoroutes)

let admin = require("firebase-admin")

var serviceAccount = JSON.parse(process.env.FIREBASE_CREDENTIALS);
//var serviceAccount = require("./proyecto-final-4483a-firebase-adminsdk-qlnvs-2321e3b964.json");


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  })

app.listen(process.env.PORT,() =>{
    console.log(`listening on port ${process.env.PORT}`)
});