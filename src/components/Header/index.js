import {withRouter, Link} from 'react-router-dom'
import Cookie from 'js-cookie'

import {FiSun} from 'react-icons/fi'
import {FaMoon} from 'react-icons/fa'

import MenuPopup from '../MenuPopup'
import LogoutPopup from '../LogoutPopup'
import NxtWatchContext from '../../context/NxtWatchContext'
import './index.css'
import {
  HeaderContainer,
  HeaderCard,
  HeaderWebsiteLogo,
  ControlsLarge,
  ThemeButton,
  ProfileImage,
  ControlsSmall,
} from './styled'

const lightWebsiteLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
const darkWebsiteLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

const Header = props => {
  const renderThemeButton = (isDarkTheme, onClickTheme) => (
    <ThemeButton
      data-testid="theme"
      type="button"
      onClick={onClickTheme}
      isDarkTheme={isDarkTheme}
    >
      {isDarkTheme && <FiSun />}
      {!isDarkTheme && <FaMoon />}
    </ThemeButton>
  )

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme, changeTheme} = value

        const onClickTheme = () => {
          changeTheme()
        }

        const onLogoutApp = () => {
          const {history} = props
          Cookie.remove('jwt_token')
          history.replace('/login')
        }

        return (
          <HeaderContainer isDarkTheme={isDarkTheme}>
            <HeaderCard>
              <Link to="/" className="link">
                <HeaderWebsiteLogo
                  src={isDarkTheme ? darkWebsiteLogo : lightWebsiteLogo}
                  alt="website logo"
                />
              </Link>
              <ControlsLarge>
                {renderThemeButton(isDarkTheme, onClickTheme)}
                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <LogoutPopup
                  isDarkTheme={isDarkTheme}
                  onLogoutApp={onLogoutApp}
                  type="text"
                />
              </ControlsLarge>
              <ControlsSmall>
                {renderThemeButton(isDarkTheme, onClickTheme)}

                <MenuPopup isDarkTheme={isDarkTheme} />

                <LogoutPopup
                  isDarkTheme={isDarkTheme}
                  onLogoutApp={onLogoutApp}
                  type="icon"
                />
              </ControlsSmall>
            </HeaderCard>
          </HeaderContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default withRouter(Header)
