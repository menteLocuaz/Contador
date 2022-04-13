import React from 'react'

function Contador({ numero }) {
    return (
        <div className='container'>

            <button className="btn btn-outline-secondary mb-3  btn-lg" type="button">
                {numero}
            </button>
        </div>
    )
}
export default Contador