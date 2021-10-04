import React, { useState, useEffect } from 'react'
import api from '../api/api';


function Home() {
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        async function lerNoticias() {
            const response = await api.get('');
            setNoticias(response.data)
        }
    
    lerNoticias()
    },[])

    return (
        <div>
            {console.log(noticias)}
            {noticias.map((noticia, index)=>{
                return (
                    <article key={index}>
                        <div>
                        <strong>Título: {noticia.title}</strong><br></br>
                        <strong>Descrição: {noticia.abstract}</strong><br></br>
                        <strong>Url: {noticia.url}</strong><br></br><br></br><br></br>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}


    



export default Home;





/*
import React, { useState, useEffect } from 'react'
import axios from 'axios';
//import api from '../api/api'



async function NYT () {
    const [ noticias, setNoticias ] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/?section=technology')
        .then(res => {
            console.log(res)
            setNoticias(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])
    return (
        <div>
            <h2>
                {noticias.map(noticia =>(
                    <div key={noticia.id}>
                        titulo:
                        {  }

                    </div>
                ))}
            </h2>
        </div>
    )
}


export default NYT;

*/