import {Component} from 'react'
import Cookie from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'

import NxtWatchContext from '../../context/NxtWatchContext'
import VideoCardGaming from '../VideoCardGaming'
import {apiConst} from '../../constants/CommonConstants'
import {
  GamingVideosListContainer,
  GamingVideosUnorderedList,
  LoaderContainer,
  GamingNoResultContainer,
  GamingNoVideosImg,
  GamingNoVideosHeading,
  GamingNoVideosPara,
  GamingNoVideosButton,
  GamingBanner,
  GamingBannerButton,
  GamingBannerText,
} from './styled'

const failureLightImg =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
const failureDarkImg =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

const initialApiUrl = 'https://apis.ccbp.in/videos/gaming'

class GamingVideosList extends Component {
  state = {
    apiStatus: apiConst.initial,
    apiUrl: initialApiUrl,
    gameVideosList: [],
  }

  componentDidMount() {
    this.getTheGamingVideosData()
  }

  onSuccessApi = list => {
    console.log(list)

    const updatedList = list.map(eachVideo => ({
      id: eachVideo.id,
      thumbnailUrl: eachVideo.thumbnail_url,
      title: eachVideo.title,
      viewCount: eachVideo.view_count,
    }))

    this.setState({gameVideosList: updatedList, apiStatus: apiConst.success})
  }

  getTheGamingVideosData = async () => {
    this.setState({apiStatus: apiConst.loading})
    const jwtToken = Cookie.get('jwt_token')
    const {apiUrl} = this.state
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok) {
      if (data.total === 0) {
        this.setState({apiStatus: apiConst.notFound})
      } else {
        this.onSuccessApi(data.videos)
      }
    } else {
      this.setState({apiStatus: apiConst.failure})
    }
  }

  renderSuccessView = isDarkTheme => {
    const {gameVideosList} = this.state
    return (
      <>
        <GamingBanner data-testid="banner" isDarkTheme={isDarkTheme}>
          <GamingBannerButton type="button" isDarkTheme={isDarkTheme}>
            <SiYoutubegaming />
          </GamingBannerButton>
          <GamingBannerText isDarkTheme={isDarkTheme}>Gaming</GamingBannerText>
        </GamingBanner>
        <GamingVideosUnorderedList>
          {gameVideosList.map(eachVideo => (
            <VideoCardGaming key={eachVideo.id} eachVideo={eachVideo} />
          ))}
        </GamingVideosUnorderedList>
      </>
    )
  }

  onClickRetry = () => {
    this.getTheGamingVideosData()
  }

  renderFailureView = isDarkTheme => (
    <GamingNoResultContainer>
      <GamingNoVideosImg
        src={isDarkTheme ? failureDarkImg : failureLightImg}
        alt="failure view"
      />
      <GamingNoVideosHeading isDarkTheme={isDarkTheme}>
        Oops! Something Went Wrong
      </GamingNoVideosHeading>
      <GamingNoVideosPara isDarkTheme={isDarkTheme}>
        We are having some trouble to complete your request. Please try again.
      </GamingNoVideosPara>
      <GamingNoVideosButton type="button" onClick={this.onClickRetry}>
        Retry
      </GamingNoVideosButton>
    </GamingNoResultContainer>
  )

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoaderContainer>
  )

  renderSwitch(apiStatus, isDarkTheme) {
    switch (apiStatus) {
      case apiConst.loading:
        return this.renderLoadingView()
      case apiConst.success:
        return this.renderSuccessView(isDarkTheme)
      case apiConst.failure:
        return this.renderFailureView(isDarkTheme)
      default:
        return null
    }
  }

  render() {
    const {apiStatus} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <GamingVideosListContainer>
              {this.renderSwitch(apiStatus, isDarkTheme)}
            </GamingVideosListContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default GamingVideosList
