import {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import {FaHotjar} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'

import NxtWatchContext from '../../context/NxtWatchContext'
import './index.css'

import {navbarList} from '../../constants/CommonConstants'

import {
  NavbarContainer,
  HeaderNavUnorderedList,
  HeaderNavList,
  HeaderNavButtonIcon,
  HeaderNavPara,
  ContactUsContainer,
  ContactUsHeading,
  SocialIconContainer,
  SocialLogos,
  AboutPara,
} from './styled'

class Navbar extends Component {
  render() {
    const {match} = this.props
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <NavbarContainer isDarkTheme={isDarkTheme}>
              <HeaderNavUnorderedList>
                {navbarList.map(eachTab => (
                  <NavList
                    key={eachTab.id}
                    eachTab={eachTab}
                    matchPath={match.path}
                    isDarkTheme={isDarkTheme}
                  />
                ))}
              </HeaderNavUnorderedList>
              <ContactUsContainer>
                <ContactUsHeading isDarkTheme={isDarkTheme}>
                  CONTACT US
                </ContactUsHeading>
                <SocialIconContainer>
                  <SocialLogos
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <SocialLogos
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <SocialLogos
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </SocialIconContainer>
                <AboutPara isDarkTheme={isDarkTheme}>
                  Enjoy! Now to see your channels and recommendations!
                </AboutPara>
              </ContactUsContainer>
            </NavbarContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default withRouter(Navbar)

const NavList = props => {
  const {eachTab, matchPath, isDarkTheme} = props
  const {id, displayText, path} = eachTab

  const activeColor = path === matchPath

  return (
    <HeaderNavList activeTab={activeColor}>
      <Link to={path} className="nav-link">
        <HeaderNavButtonIcon
          type="button"
          activeTab={activeColor}
          isDarkTheme={isDarkTheme}
        >
          {id === 'HOME' && <AiFillHome />}
          {id === 'TRENDING' && <FaHotjar />}
          {id === 'GAMING' && <SiYoutubegaming />}
          {id === 'SAVEDVIDEOS' && <BiListPlus />}
        </HeaderNavButtonIcon>
        <HeaderNavPara activeTab={activeColor} isDarkTheme={isDarkTheme}>
          {displayText}
        </HeaderNavPara>
      </Link>
    </HeaderNavList>
  )
}
