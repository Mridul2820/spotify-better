import React from 'react'

import { Container } from "react-bootstrap"

const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=39d95f2d59ee4bab928ec2de5d12d11a&response_type=code&redirect_uri=https://spotify-better.vercel.app&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'

const Login = () => {
    return (
        <Container className="container">
            <a href={AUTH_URL} className="btn btn-success btn-lg">
                Login With Spotify
            </a>
        </Container>
    )
}

export default Login
