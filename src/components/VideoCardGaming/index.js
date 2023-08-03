import {Link} from 'react-router-dom'
import NxtWatchContext from '../../context/NxtWatchContext'
import './index.css'
import {
  GamingEachVideoList,
  GamingVideoCardThumbnail,
  GamingVideoCardInfoLogoContainer,
  GamingVideoCardInfoContainer,
  GamingVideoCardTitle,
  GamingVideoCardViewPublishCard,
  GamingVideoCardViews,
} from './styled'

const VideoCardGaming = props => {
  const {eachVideo} = props
  const {id, thumbnailUrl, title, viewCount} = eachVideo

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <GamingEachVideoList>
            <Link to={`/videos/${id}`} className="gaming-link">
              <GamingVideoCardThumbnail
                src={thumbnailUrl}
                alt="video thumbnail"
              />
              <GamingVideoCardInfoLogoContainer>
                <GamingVideoCardInfoContainer>
                  <GamingVideoCardTitle isDarkTheme={isDarkTheme}>
                    {title}
                  </GamingVideoCardTitle>
                  <GamingVideoCardViewPublishCard>
                    <GamingVideoCardViews isDarkTheme={isDarkTheme}>
                      {viewCount} Watching Worldwide
                    </GamingVideoCardViews>
                  </GamingVideoCardViewPublishCard>
                </GamingVideoCardInfoContainer>
              </GamingVideoCardInfoLogoContainer>
            </Link>
          </GamingEachVideoList>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default VideoCardGaming
