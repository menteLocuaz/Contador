import React from 'react'

function Boton({ texto, botonClick, eventoClick }) {
    return (
        <div className='container'>
            <button
                type="button"
                className={botonClick ? 'btn btn-primary mb-3' : 'btn btn-danger mb-3'}
                onClick={eventoClick}
            >
                {texto}
            </button>
        </div >
    )
}

export default Boton