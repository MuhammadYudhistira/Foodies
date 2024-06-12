'use client'
import React from 'react'

const error = ({ error }) => {
    return (
        <main className='error'>
            <h1>An Error occurred!</h1>
            <p>Failed to fetch meals data, please try again later</p>
        </main>
    )
}

export default error