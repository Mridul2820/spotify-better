import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import useAuth from '../hooks/useAuth'

const Dashboard = ({ code }) => {
    const accessToken = useAuth(code)

    const [search, setSearch] = useState('')

    return (
        <Container>
            <Form.Control 
                type="search" 
                placeholder="Search Songs / Artists"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
        </Container>
    )
}

export default Dashboard
