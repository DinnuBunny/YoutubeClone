import {Link} from 'react-router-dom'
import NxtWatchContext from '../../context/NxtWatchContext'
import './index.css'
import {
  HomeEachVideoList,
  HomeVideoCardThumbnail,
  HomeVideoCardInfoLogoContainer,
  HomeVideoCardInfoContainer,
  HomeVideoCardChannelLogo,
  HomeVideoCardTitle,
  HomeVideoCardChannelName,
  HomeVideoCardViewPublishCard,
  HomeVideoCardPublished,
  HomeVideoCardViews,
} from './styled'

const VideoCardHome = props => {
  const {eachVideo} = props
  const {channel, id, publishedAt, thumbnailUrl, title, viewCount} = eachVideo
  const {name, profileImageUrl} = channel

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <HomeEachVideoList>
            <Link to={`/videos/${id}`} className="home-link">
              <HomeVideoCardThumbnail
                src={thumbnailUrl}
                alt="video thumbnail"
              />
              <HomeVideoCardInfoLogoContainer>
                <HomeVideoCardChannelLogo
                  src={profileImageUrl}
                  alt="channel logo"
                />
                <HomeVideoCardInfoContainer>
                  <HomeVideoCardTitle isDarkTheme={isDarkTheme}>
                    {title}
                  </HomeVideoCardTitle>
                  <HomeVideoCardChannelName isDarkTheme={isDarkTheme}>
                    {name}
                  </HomeVideoCardChannelName>
                  <HomeVideoCardViewPublishCard>
                    <HomeVideoCardViews isDarkTheme={isDarkTheme}>
                      {viewCount} views
                    </HomeVideoCardViews>
                    <HomeVideoCardPublished isDarkTheme={isDarkTheme}>
                      {publishedAt}
                    </HomeVideoCardPublished>
                  </HomeVideoCardViewPublishCard>
                </HomeVideoCardInfoContainer>
              </HomeVideoCardInfoLogoContainer>
            </Link>
          </HomeEachVideoList>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default VideoCardHome
