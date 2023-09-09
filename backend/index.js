require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({origin:true}));
app.set("port",process.env.PORT||8080);

app.post("/authenticate",async (req,res) =>{
    const {username} = req.body;
    try {
        const r =await axios.put(
            'https://api.chatengine.io/users/',
            {username:username,secret:username,first_name:username},
            {headers:{"private-key":process.env.Private_Key}}
            )
       return res.status(r.status).json(r.data);     
    } catch (e) {
        return res.status(e.response.status).json(e.response.data); 
    }
    // return res.json({username: username, secret:"shh256..."})
});

app.listen(app.get('port'),()=>{
    console.log(`server is running on port ${app.get('port')} `)
});