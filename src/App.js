import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import NxtWatchContext from './context/NxtWatchContext'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import './App.css'

class App extends Component {
  state = {isDarkTheme: false, SavedVideosList: []}

  changeTheme = () => {
    this.setState(prev => ({
      isDarkTheme: !prev.isDarkTheme,
    }))
  }

  AddVideoSavedList = VideoDetailData => {
    const {SavedVideosList} = this.state

    const foundVideo = SavedVideosList.find(
      eachVideo => eachVideo.id === VideoDetailData.id,
    )

    if (foundVideo === undefined) {
      this.setState(prev => ({
        SavedVideosList: [...prev.SavedVideosList, {...VideoDetailData}],
      }))
    } else {
      const filteredVideoList = SavedVideosList.filter(
        eachVideo => eachVideo.id !== VideoDetailData.id,
      )
      this.setState({SavedVideosList: filteredVideoList})
    }
  }

  render() {
    const {isDarkTheme, SavedVideosList} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isDarkTheme,
          changeTheme: this.changeTheme,
          SavedVideosList,
          AddVideoSavedList: this.AddVideoSavedList,
        }}
      >
        <>
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetails}
            />
            <Route exact path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
