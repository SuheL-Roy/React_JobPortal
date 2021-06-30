import React from 'react'

export default function Vacancy({vacancy,handledelete}) {
    
    return (
        <>
        <div className="box mt-4 mb-4">
        <h1 className="title is-5">{vacancy.title}</h1>
        <span>{vacancy.company}</span>
        <p>{vacancy.city}</p>
        <div className="block"></div>
        <p>{vacancy.discription}</p>
        <div className="is-flex is-justify-content-space-between">
            <button className="button is-primary mt-4">Apply</button>
            <button onClick={()=>handledelete(vacancy.id)} className="button is-danger mt-4">Delete</button>

        </div>

    </div>
    </>
    )
}
