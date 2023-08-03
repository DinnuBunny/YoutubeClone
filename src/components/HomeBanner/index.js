import {MdClose} from 'react-icons/md'

import NxtWatchContext from '../../context/NxtWatchContext'
import './index.css'
import {
  BannerContainer,
  BannerLogoCloseCard,
  BannerWebsiteLogo,
  BannerCloseButton,
  BannerTitle,
  GetItNowButton,
} from './styled'

const lightWebsiteLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

const HomeBanner = props => {
  const {closeHomeBanner} = props

  const onCloseBanner = () => {
    closeHomeBanner()
  }
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <BannerContainer data-testid="banner">
            <BannerLogoCloseCard>
              <BannerWebsiteLogo src={lightWebsiteLogo} alt="nxt watch logo" />
              <BannerCloseButton
                type="button"
                onClick={onCloseBanner}
                isDarkTheme={isDarkTheme}
                data-testid="close"
              >
                <MdClose />
              </BannerCloseButton>
            </BannerLogoCloseCard>
            <BannerTitle>
              Buy Nxt Watch Premium prepaid plans with UPI
            </BannerTitle>
            <GetItNowButton type="button">GET IT NOW</GetItNowButton>
          </BannerContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default HomeBanner
