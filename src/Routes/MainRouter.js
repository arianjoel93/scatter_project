import React, { Suspense } from 'react'
import './MainRouter.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/organisms/Layout/Layout'
import LayoutAuth from '../components/organisms/LayoutAuth/LayoutAuth'
import Home from '../pages/Home/Home'
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';
import Mathematics from '../pages/Mathematics/Mathematics'
import Statistics from '../pages/Statistics/Statistics'
import LifeSciences from '../pages/LifeSciences/LifeSciences'
import Services from '../pages/Services/Services'
import AboutUs from '../pages/AboutUs/AboutUs'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import { Guest, Protector } from '../helpers/helpers'
import Dashboard from '../pages/Dashboard/Dashboard'
import { Provider } from 'react-redux'
import store from "../store"

const MainRouter = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route
                        element={
                            <Guest Component={Layout}></Guest>
                        }
                        children={
                            <>
                                <Route
                                    path="/"
                                    element={
                                        <Suspense>
                                            <Home></Home>
                                        </Suspense>
                                    }
                                />
                                <Route
                                    path="/mathematics"
                                    element={
                                        <Suspense>
                                            <Mathematics></Mathematics>
                                        </Suspense>
                                    }
                                />
                                <Route
                                    path="/statistics"
                                    element={
                                        <Suspense>
                                            <Statistics></Statistics>
                                        </Suspense>
                                    }
                                />
                                <Route
                                    path="/life-sciences"
                                    element={
                                        <Suspense>
                                            <LifeSciences></LifeSciences>
                                        </Suspense>
                                    }
                                />
                                <Route
                                    path="/services"
                                    element={
                                        <Suspense>
                                            <Services></Services>
                                        </Suspense>
                                    }
                                />
                                <Route
                                    path="/about-us"
                                    element={
                                        <Suspense>
                                            <AboutUs></AboutUs>
                                        </Suspense>
                                    }
                                />

                            </>
                        }
                    />
                    <Route
                        path="/auth/sign-in"
                        element={
                            <Suspense>
                                <Guest Component={Login}></Guest>
                            </Suspense>
                        }
                    />
                    <Route
                        path="/auth/sign-in/create-user"
                        element={
                            <Suspense>
                                <Guest Component={Register}></Guest>
                            </Suspense>
                        }
                    />
                    <Route
                        element={
                            <Protector Component={LayoutAuth} />
                        }
                        children={
                            <>
                                <Route
                                    path='/home'
                                    element={
                                        <Suspense>
                                            <Dashboard></Dashboard>
                                        </Suspense>
                                    }
                                />
                                <Route
                                    path="/auth/services"
                                    element={
                                        <Suspense>
                                            <Services></Services>
                                        </Suspense>
                                    }
                                />
                            </>
                        }
                    />
                </Routes>
            </Provider>
        </BrowserRouter>
    )
}

export default MainRouter