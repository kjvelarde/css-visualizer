//ids of songs listened to
//currentSongId
//collection
//nextHref
//paginationIndex


//units:
//currentGenreFormatted
//songsLength
//songsListenedToLength
//currentSong
//currentSongFormatted
//  streamUrl
//  titleUrl
//  titleName
//  artistUrl
//  artistName
//  albumSrc


import { types } from './SoundCloud.actions'

export const initialState = {
    paginationIndex: false,
    currentSongId: false,
    nextHref: false,
    collection: [],
    listenedToIds: [],

    error: false,
}

export const reducer = {
    [types.SC__GET_SONGS_SUCCESS]: (state, action) => {
        const { nextHref } = action

        return {
            ...state,
            nextHref,
            error: false,
        }
    },
    [types.SC__GET_SONGS_ERROR]: (state, action) => {
        const { error } = action

        return {
            ...state,
            error,
        }
    },
    [types.SC__SET_CURRENT_SONG_ID]: (state, action) => {
        const { id } = action

        return {
            ...state,
            currentSongId: id,
        }
    },
    [types.SC__SET_SONG_AS_LISTENED_SUCCESS]: (state, action) => {
        const { listenedToIds } = action

        return {
            ...state,
            listenedToIds,
        }
    },
    [types.SC__SET_COLLECTION]: (state, action) => {
        const { collection } = action

        return {
            ...state,
            collection,
        }
    },
}
