import React from 'react'

const TrackSearchResult = ({ track }) => {
    return (
        <div 
            className="d-flex align-item-center m-2" 
            style={{cursor: 'pointer'}}
            onClick={handlePlay}
        >
            <img
                src={track.albumUrl} 
                alt={track.title}
                style={{height: "64px", width: "64px"}}
            />
            <div className="ml-3">
                <div>{track.title}</div>
                <div className="text-muted">
                    {track.artists
                        .map(artist => <span key={artist.id}>{artist.name}</span>)
                        .reduce((prev, curr) => [prev, ', ', curr])
                    }
                </div>
            </div>
        </div>
    )
}

export default TrackSearchResult
