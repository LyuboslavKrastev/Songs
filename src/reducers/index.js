import { combineReducers } from 'redux'

const songsReducer = () => {
    return [
        { title: 'Fly me to the moon', duration: '4:00' },
        { title: 'Silver Bullet', duration: '3:10' },
        { title: 'Welcome to the machine', duration: '5:00'}
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
        if(action.type === 'SONG_SELECTED'){
            return action.payload;
        }

        return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})