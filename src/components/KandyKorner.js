import React from 'react'
import { Route } from 'react-router-dom'
import { ApplicationViews } from './ApplicationViews'
import  { NavBar } from './nav/NavBar'

export const KandyKorner = () => (
    <>
        <Route render={() => {
            return ( <>
                <Route render={props => <NavBar {...props} /> } />
                <Route render={props => <ApplicationViews {...props} /> } />
            </>
            )
        }} />
    </>
    )