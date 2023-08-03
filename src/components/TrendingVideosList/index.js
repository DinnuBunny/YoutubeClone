import {Component} from 'react'
import Cookie from 'js-cookie'
import Loader from 'react-loader-spinner'
import {formatDistanceStrict} from 'date-fns'
import {FaHotjar} from 'react-icons/fa'

import NxtWatchContext from '../../context/NxtWatchContext'
import VideoCardTrending from '../VideoCardTrending'
import {apiConst} from '../../constants/CommonConstants'
import {
  TrendingVideosListContainer,
  TrendingVideosUnorderedList,
  LoaderContainer,
  TrendingNoResultContainer,
  TrendingNoVideosImg,
  TrendingNoVideosHeading,
  TrendingNoVideosPara,
  TrendingNoVideosButton,
  TrendingBanner,
  TrendingBannerButton,
  TrendingBannerText,
} from './styled'

const failureLightImg =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
const failureDarkImg =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

const initialApiUrl = 'https://apis.ccbp.in/videos/trending'

class TrendingVideosList extends Component {
  state = {
    apiStatus: apiConst.initial,
    apiUrl: initialApiUrl,
    allVideosList: [],
  }

  componentDidMount() {
    this.getTheTrendingVideosData()
  }

  onSuccessApi = list => {
    console.log(list)
    const updatedList = list.map(eachVideo => ({
      channel: {
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      },
      id: eachVideo.id,
      publishedAt: formatDistanceStrict(
        new Date(eachVideo.published_at),
        new Date(),
        {
          addSuffix: true,
        },
      ),
      thumbnailUrl: eachVideo.thumbnail_url,
      title: eachVideo.title,
      viewCount: eachVideo.view_count,
    }))

    this.setState({allVideosList: updatedList, apiStatus: apiConst.success})
  }

  getTheTrendingVideosData = async () => {
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
    const {allVideosList} = this.state
    return (
      <>
        <TrendingBanner data-testid="banner" isDarkTheme={isDarkTheme}>
          <TrendingBannerButton type="button" isDarkTheme={isDarkTheme}>
            <FaHotjar />
          </TrendingBannerButton>
          <TrendingBannerText isDarkTheme={isDarkTheme}>
            Trending
          </TrendingBannerText>
        </TrendingBanner>
        <TrendingVideosUnorderedList>
          {allVideosList.map(eachVideo => (
            <VideoCardTrending key={eachVideo.id} eachVideo={eachVideo} />
          ))}
        </TrendingVideosUnorderedList>
      </>
    )
  }

  onClickRetry = () => {
    this.getTheTrendingVideosData()
  }

  renderFailureView = isDarkTheme => (
    <TrendingNoResultContainer>
      <TrendingNoVideosImg
        src={isDarkTheme ? failureDarkImg : failureLightImg}
        alt="failure view"
      />
      <TrendingNoVideosHeading isDarkTheme={isDarkTheme}>
        Oops! Something Went Wrong
      </TrendingNoVideosHeading>
      <TrendingNoVideosPara isDarkTheme={isDarkTheme}>
        We are having some trouble to complete your request. Please try again.
      </TrendingNoVideosPara>
      <TrendingNoVideosButton type="button" onClick={this.onClickRetry}>
        Retry
      </TrendingNoVideosButton>
    </TrendingNoResultContainer>
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
            <TrendingVideosListContainer>
              {this.renderSwitch(apiStatus, isDarkTheme)}
            </TrendingVideosListContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default TrendingVideosList
