import React from 'react'

function States({ states }) {
    return (
        <div>
            {
                states.map((state, index) => (
                    <div className='bg-warning' key={index}>
                        <h1 >{state.name}</h1>
                        <p>Language: {state.language}</p>
                        <p>Population: {state.Population}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default States