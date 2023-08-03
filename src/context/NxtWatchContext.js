import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: true,
  changeTheme: () => {},
  SavedVideosList: () => {},
  AddVideoSavedList: () => {},
})

export default NxtWatchContext
