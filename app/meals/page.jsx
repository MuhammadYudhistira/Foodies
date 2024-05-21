import React from 'react'
import classes from './page.module.css'
import Link from 'next/link'
import MealsGrid from '@/components/meals/MealsGrid'

const Meals = () => {
    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meals, created{' '}
                    <span>by you</span>
                </h1>
                <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
                <p className={classes.cta}>
                    <Link href={"/meals/share"}>Share your favorite Recipe</Link>
                </p>
            </header>

            <main className={classes.main}>
                <MealsGrid meals={[]} />
            </main>
        </>
    )
}

export default Meals