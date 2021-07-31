import React from  'react'
import ReactDOM from 'react-dom'
import Shopping from './Shopping'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

function App(){
    return(
        <>
            <Shopping />
        </>
    )
}

ReactDOM.render(<App />,document.getElementById('root'))