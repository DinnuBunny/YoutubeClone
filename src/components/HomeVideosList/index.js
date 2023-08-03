import {Component} from 'react'
import Cookie from 'js-cookie'
import Loader from 'react-loader-spinner'
import {formatDistanceStrict} from 'date-fns'

import {AiOutlineSearch} from 'react-icons/ai'

import NxtWatchContext from '../../context/NxtWatchContext'
import VideoCardHome from '../VideoCardHome'
import {apiConst} from '../../constants/CommonConstants'
import {
  HomeVideosListContainer,
  SearchInputCard,
  SearchInput,
  SearchButton,
  HomeVideosUnorderedList,
  LoaderContainer,
  HomeNoResultContainer,
  HomeNoVideosImg,
  HomeNoVideosHeading,
  HomeNoVideosPara,
  HomeNoVideosButton,
} from './styled'

const failureLightImg =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
const failureDarkImg =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
const initialApiUrl = 'https://apis.ccbp.in/videos/all?search='

class HomeVideosList extends Component {
  state = {
    searchInput: '',
    apiStatus: apiConst.initial,
    apiUrl: initialApiUrl,
    allVideosList: [],
  }

  componentDidMount() {
    this.getTheAllVideosData()
  }

  onSuccessApi = list => {
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

  getTheAllVideosData = async () => {
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

  onSearchText = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearch = () => {
    const {searchInput} = this.state
    const queryApi = initialApiUrl + searchInput
    this.setState({apiUrl: queryApi}, this.getTheAllVideosData)
  }

  renderSuccessView = () => {
    const {allVideosList} = this.state
    return (
      <HomeVideosUnorderedList>
        {allVideosList.map(eachVideo => (
          <VideoCardHome key={eachVideo.id} eachVideo={eachVideo} />
        ))}
      </HomeVideosUnorderedList>
    )
  }

  onClickRetry = () => {
    this.getTheAllVideosData()
  }

  renderFailureView = isDarkTheme => (
    <HomeNoResultContainer>
      <HomeNoVideosImg
        src={isDarkTheme ? failureDarkImg : failureLightImg}
        alt="failure view"
      />
      <HomeNoVideosHeading isDarkTheme={isDarkTheme}>
        Oops! Something Went Wrong
      </HomeNoVideosHeading>
      <HomeNoVideosPara isDarkTheme={isDarkTheme}>
        We are having trouble to complete your request. Please try again.
      </HomeNoVideosPara>
      <HomeNoVideosButton type="button" onClick={this.onClickRetry}>
        Retry
      </HomeNoVideosButton>
    </HomeNoResultContainer>
  )

  renderNoSearchResultView = isDarkTheme => (
    <HomeNoResultContainer>
      <HomeNoVideosImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <HomeNoVideosHeading isDarkTheme={isDarkTheme}>
        No Search results found
      </HomeNoVideosHeading>
      <HomeNoVideosPara isDarkTheme={isDarkTheme}>
        Try different key words or remove search filter
      </HomeNoVideosPara>
      <HomeNoVideosButton type="button" onClick={this.onClickRetry}>
        Retry
      </HomeNoVideosButton>
    </HomeNoResultContainer>
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
      case apiConst.notFound:
        return this.renderNoSearchResultView(isDarkTheme)
      case apiConst.failure:
        return this.renderFailureView(isDarkTheme)
      default:
        return null
    }
  }

  render() {
    const {searchInput, apiStatus} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <HomeVideosListContainer>
              <SearchInputCard>
                <SearchInput
                  type="search"
                  onChange={this.onSearchText}
                  value={searchInput}
                  placeholder="Search"
                  isDarkTheme={isDarkTheme}
                />
                <SearchButton
                  type="button"
                  data-testid="searchButton"
                  onClick={this.onClickSearch}
                  isDarkTheme={isDarkTheme}
                >
                  <AiOutlineSearch />
                </SearchButton>
              </SearchInputCard>
              {this.renderSwitch(apiStatus, isDarkTheme)}
            </HomeVideosListContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default HomeVideosList
