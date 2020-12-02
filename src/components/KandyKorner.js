import React from 'react'
import { Route } from 'react-router-dom'
import { ApplicationViews } from './ApplicationViews'

export const KandyKorner = () => {
    <>
        <Route render={() => {
            return (
                <Route render={props => <ApplicationViews {...props} /> } />
            )
        }} />
    </>
}