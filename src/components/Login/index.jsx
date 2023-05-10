import React from 'react'
import SignUp from './Sign Up'
import { Container } from 'react-bootstrap'
import Login from './Sign In'

export const Registration = () => {
    return (
        <Container className='d-flex align-items-center justify-content-center'
            style={{ minHeight: "100vh" }}
        >
            <div className='w-100 ' style={{ maxWidth: "400px" }}>

                <Login />
            </div>
        </Container>
    )
}
export default Registration