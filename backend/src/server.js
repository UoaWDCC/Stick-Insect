import express from 'express';

// Setup Express
const app = express();
const port = process.env.PORT || 3001;


// Setup body-parser
app.use(express.json());

// Setup our routes.
//import routes from './routes';
//app.use('/', routes);

app.get('/',(req,res) => {
    res.status(200).json("hello");
})

app.listen(port, ()=> console.log(`App server listening on port ${port}!`));