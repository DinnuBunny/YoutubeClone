import {Link} from 'react-router-dom'
import NxtWatchContext from '../../context/NxtWatchContext'
import './index.css'
import {
  TrendingEachVideoList,
  TrendingVideoCardThumbnail,
  TrendingVideoCardInfoLogoContainer,
  TrendingVideoCardInfoContainer,
  TrendingVideoCardChannelLogo,
  TrendingVideoCardTitle,
  TrendingVideoCardChannelName,
  TrendingVideoCardViewPublishCard,
  TrendingVideoCardPublished,
  TrendingVideoCardViews,
} from './styled'

const VideoCardTrending = props => {
  const {eachVideo} = props
  const {channel, id, publishedAt, thumbnailUrl, title, viewCount} = eachVideo
  const {name, profileImageUrl} = channel

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <TrendingEachVideoList>
            <Link to={`/videos/${id}`} className="trending-link">
              <TrendingVideoCardThumbnail
                src={thumbnailUrl}
                alt="video thumbnail"
              />
              <TrendingVideoCardInfoLogoContainer>
                <TrendingVideoCardChannelLogo
                  src={profileImageUrl}
                  alt="channel logo"
                />
                <TrendingVideoCardInfoContainer>
                  <TrendingVideoCardTitle isDarkTheme={isDarkTheme}>
                    {title}
                  </TrendingVideoCardTitle>
                  <TrendingVideoCardChannelName isDarkTheme={isDarkTheme}>
                    {name}
                  </TrendingVideoCardChannelName>
                  <TrendingVideoCardViewPublishCard>
                    <TrendingVideoCardViews isDarkTheme={isDarkTheme}>
                      {viewCount} views
                    </TrendingVideoCardViews>
                    <TrendingVideoCardPublished isDarkTheme={isDarkTheme}>
                      {publishedAt}
                    </TrendingVideoCardPublished>
                  </TrendingVideoCardViewPublishCard>
                </TrendingVideoCardInfoContainer>
              </TrendingVideoCardInfoLogoContainer>
            </Link>
          </TrendingEachVideoList>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default VideoCardTrending
