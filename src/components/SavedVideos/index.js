import NxtWatchContext from '../../context/NxtWatchContext'
import Navbar from '../Navbar'
import Header from '../Header'
import SavedVideosListComp from '../SavedVideosList'
import './index.css'
import {
  SavedPageContainer,
  SavedContainer,
  SavedBannerVideoContainer,
} from './styled'

const SavedVideos = () => {
  console.log('SavedVideos')

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <SavedPageContainer data-testid="savedVideos">
            <Header />
            <SavedContainer>
              <Navbar />
              <SavedBannerVideoContainer isDarkTheme={isDarkTheme}>
                <SavedVideosListComp />
              </SavedBannerVideoContainer>
            </SavedContainer>
          </SavedPageContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default SavedVideos
