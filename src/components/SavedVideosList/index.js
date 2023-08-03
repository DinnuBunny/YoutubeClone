import {Component} from 'react'
import {BiListPlus} from 'react-icons/bi'

import NxtWatchContext from '../../context/NxtWatchContext'
import VideoCardTrending from '../VideoCardTrending'
import {
  SavedVideosListContainer,
  SavedVideosUnorderedList,
  SavedNoResultContainer,
  SavedNoVideosImg,
  SavedNoVideosHeading,
  SavedNoVideosPara,
  SavedBanner,
  SavedBannerButton,
  SavedBannerText,
} from './styled'

class SavedVideosListComp extends Component {
  renderSuccessView = (isDarkTheme, SavedVideosList) => (
    <>
      <SavedBanner data-testid="banner" isDarkTheme={isDarkTheme}>
        <SavedBannerButton type="button" isDarkTheme={isDarkTheme}>
          <BiListPlus />
        </SavedBannerButton>
        <SavedBannerText isDarkTheme={isDarkTheme}>
          Saved Videos
        </SavedBannerText>
      </SavedBanner>
      <SavedVideosUnorderedList>
        {SavedVideosList.map(eachVideo => (
          <VideoCardTrending key={eachVideo.id} eachVideo={eachVideo} />
        ))}
      </SavedVideosUnorderedList>
    </>
  )

  onClickRetry = () => {
    this.getTheTrendingVideosData()
  }

  renderNoSearchResultView = isDarkTheme => (
    <SavedNoResultContainer>
      <SavedNoVideosImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <SavedNoVideosHeading isDarkTheme={isDarkTheme}>
        No Saved videos found
      </SavedNoVideosHeading>
      <SavedNoVideosPara isDarkTheme={isDarkTheme}>
        You can save your videos while watching them
      </SavedNoVideosPara>
    </SavedNoResultContainer>
  )

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme, SavedVideosList} = value
          const isEmpty = SavedVideosList.length === 0
          return (
            <SavedVideosListContainer>
              {isEmpty
                ? this.renderNoSearchResultView(isDarkTheme)
                : this.renderSuccessView(isDarkTheme, SavedVideosList)}
            </SavedVideosListContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default SavedVideosListComp
