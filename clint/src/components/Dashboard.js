import React, { useState, useEffect } from 'react'
import SpotifyWebApi from 'spotify-web-api-node'
import { Container, Form } from 'react-bootstrap'
import useAuth from '../hooks/useAuth'
import TrackSearchResult from './TrackSearchResult'

const spotifyApi = new SpotifyWebApi({
    clientId: '39d95f2d59ee4bab928ec2de5d12d11a',

})

const Dashboard = ({ code }) => {
    const accessToken = useAuth(code)
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([])

    console.log(searchResults);

    useEffect(() => {
        if(!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

    useEffect(() => {
        if(!search) return setSearchResults([])
        if(!accessToken) return

        let cancel = false

        spotifyApi.searchTracks(search).then(res => {
            if (cancel) return

            setSearchResults(
            res.body.tracks.items.map(track => {
                const smallestAlbumImage = track.album.images.reduce(
                    (smallest, image) => {
                        if (image.height < smallest.height) return image
                        return smallest
                    },
                    track.album.images[0]
                )
                return {
                    artists : track.artists,
                    title: track.name,
                    uri: track.uri,
                    albumUrl: smallestAlbumImage.url,
                }
            }))
        })

        return () => (cancel = true)

    }, [search, accessToken])

    return (
        <Container className="d-flex flex-column py-2" style={{height: '100vh'}}>
            <Form.Control 
                type="search" 
                placeholder="Search Songs / Artists"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <div className="flex-grow-1 my-2" style={{overflowY: 'auto'}}>
            {searchResults.map(track => (
                <TrackSearchResult
                    track={track}
                    key={track.uri}
                    // chooseTrack={chooseTrack}
                />
            ))}
            </div>
            <div className="">Bottom</div>
        </Container>
    )
}

export default Dashboard
