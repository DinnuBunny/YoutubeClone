import {Component} from 'react'
import Cookie from 'js-cookie'
import Loader from 'react-loader-spinner'
import {formatDistanceStrict} from 'date-fns'
import ReactPlayer from 'react-player'
import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'

import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import Navbar from '../Navbar'
import {apiConst} from '../../constants/CommonConstants'

import {
  VideoItemPageContainer,
  NavVideoItemContainer,
  VideoItemContainer,
  VideoItemNoResultContainer,
  VideoItemNoVideosImg,
  VideoItemNoVideosHeading,
  VideoItemNoVideosPara,
  VideoItemNoVideosButton,
  LoaderContainer,
  VideoPlayerContainer,
  VideoItemInfoContainer,
  VideoItemTitle,
  VideoItemViewDateLikeSaveContainer,
  VideoItemViewDateContainer,
  VideoItemViews,
  VideoItemPublished,
  VideoItemLikeDislikeSaveCard,
  ActionLikeIconButton,
  ActionDislikeIconButton,
  ActionSaveIconButton,
  ActionButtonPara,
  VideoItemCardInfoLogoContainer,
  VideoItemCardChannelLogo,
  VideoItemCardInfoContainer,
  VideoItemChannelName,
  VideoItemChannelSubscribers,
  VideoItemChannelDescription,
} from './styled'

const failureLightImg =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
const failureDarkImg =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiConst.initial,
    videosDetailsData: {},
    LikeActive: false,
    DislikeActive: false,
  }

  componentDidMount() {
    this.getTheVideosDetailData()
  }

  onSuccessApi = data => {
    const updatedData = {
      channel: {
        name: data.channel.name,
        profileImageUrl: data.channel.profile_image_url,
        subscriberCount: data.channel.subscriber_count,
      },
      description: data.description,
      id: data.id,
      publishedAt: formatDistanceStrict(
        new Date(data.published_at),
        new Date(),
        {
          addSuffix: true,
        },
      ),
      thumbnailUrl: data.thumbnail_url,
      title: data.title,
      videoUrl: data.video_url,
      viewCount: data.view_count,
    }
    this.setState({
      videosDetailsData: {...updatedData},
      apiStatus: apiConst.success,
    })
  }

  getTheVideosDetailData = async () => {
    this.setState({apiStatus: apiConst.loading})
    const jwtToken = Cookie.get('jwt_token')
    const {match} = this.props
    const {id} = match.params
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok) {
      this.onSuccessApi(data.video_details)
    } else {
      this.setState({apiStatus: apiConst.failure})
    }
  }

  onClickRetry = () => {
    this.getTheVideosDetailData()
  }

  onLikeVideo = () => {
    this.setState({LikeActive: true, DislikeActive: false})
  }

  onDislikeVideo = () => {
    this.setState({DislikeActive: true, LikeActive: false})
  }

  renderSuccessView = () => {
    const {videosDetailsData, LikeActive, DislikeActive} = this.state
    const {
      channel,
      description,
      publishedAt,
      title,
      videoUrl,
      viewCount,
    } = videosDetailsData
    const {name, profileImageUrl, subscriberCount} = channel

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme, AddVideoSavedList, SavedVideosList} = value

          const SaveVideo = () => {
            AddVideoSavedList(videosDetailsData)
          }

          const isFound = SavedVideosList.find(
            eachVideo => videosDetailsData.id === eachVideo.id,
          )

          return (
            <>
              <VideoPlayerContainer>
                <ReactPlayer url={videoUrl} controls width="100%" />
                <VideoItemInfoContainer>
                  <VideoItemTitle isDarkTheme={isDarkTheme}>
                    {title}
                  </VideoItemTitle>
                  <VideoItemViewDateLikeSaveContainer>
                    <VideoItemViewDateContainer>
                      <VideoItemViews isDarkTheme={isDarkTheme}>
                        {viewCount} views
                      </VideoItemViews>
                      <VideoItemPublished isDarkTheme={isDarkTheme}>
                        {publishedAt}
                      </VideoItemPublished>
                    </VideoItemViewDateContainer>
                    <VideoItemLikeDislikeSaveCard>
                      <ActionLikeIconButton
                        LikeActive={LikeActive}
                        onClick={this.onLikeVideo}
                        type="button"
                      >
                        <BiLike />
                        <ActionButtonPara>Like</ActionButtonPara>
                      </ActionLikeIconButton>
                      <ActionDislikeIconButton
                        DislikeActive={DislikeActive}
                        onClick={this.onDislikeVideo}
                        type="button"
                      >
                        <BiDislike />
                        <ActionButtonPara>Dislike</ActionButtonPara>
                      </ActionDislikeIconButton>
                      <ActionSaveIconButton
                        SavedActive={isFound}
                        onClick={SaveVideo}
                        type="button"
                      >
                        <BiListPlus />
                        <ActionButtonPara>
                          {isFound ? 'Saved' : 'Save'}
                        </ActionButtonPara>
                      </ActionSaveIconButton>
                    </VideoItemLikeDislikeSaveCard>
                  </VideoItemViewDateLikeSaveContainer>
                  <hr width="100%" />
                </VideoItemInfoContainer>
                <VideoItemCardInfoLogoContainer>
                  <VideoItemCardChannelLogo
                    src={profileImageUrl}
                    alt="channel logo"
                  />
                  <VideoItemCardInfoContainer>
                    <VideoItemChannelName isDarkTheme={isDarkTheme}>
                      {name}
                    </VideoItemChannelName>
                    <VideoItemChannelSubscribers isDarkTheme={isDarkTheme}>
                      {subscriberCount} subscribers
                    </VideoItemChannelSubscribers>
                    <VideoItemChannelDescription isDarkTheme={isDarkTheme}>
                      {description}
                    </VideoItemChannelDescription>
                  </VideoItemCardInfoContainer>
                </VideoItemCardInfoLogoContainer>
              </VideoPlayerContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderFailureView = isDarkTheme => (
    <VideoItemNoResultContainer>
      <VideoItemNoVideosImg
        src={isDarkTheme ? failureDarkImg : failureLightImg}
        alt="failure view"
      />
      <VideoItemNoVideosHeading isDarkTheme={isDarkTheme}>
        Oops! Something Went Wrong
      </VideoItemNoVideosHeading>
      <VideoItemNoVideosPara isDarkTheme={isDarkTheme}>
        We are having trouble to complete your request. Please try again.
      </VideoItemNoVideosPara>
      <VideoItemNoVideosButton type="button" onClick={this.onClickRetry}>
        Retry
      </VideoItemNoVideosButton>
    </VideoItemNoResultContainer>
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
        return this.renderSuccessView()
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
            <VideoItemPageContainer
              isDarkTheme={isDarkTheme}
              data-testid="videoItemDetails"
            >
              <Header />
              <NavVideoItemContainer>
                <Navbar />
                <VideoItemContainer isDarkTheme={isDarkTheme}>
                  {this.renderSwitch(apiStatus, isDarkTheme)}
                </VideoItemContainer>
              </NavVideoItemContainer>
            </VideoItemPageContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoItemDetails
