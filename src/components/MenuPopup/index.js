import {Component} from 'react'

import {withRouter, Link} from 'react-router-dom'
import {FiMenu} from 'react-icons/fi'
import {MdClose} from 'react-icons/md'
import {AiFillHome} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import {FaHotjar} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import Popup from 'reactjs-popup'

import {navbarList} from '../../constants/CommonConstants'

import {
  MenuButton,
  PopupContent,
  PopupCloseBtn,
  HeaderNavUnorderedList,
  HeaderNavList,
  HeaderNavButtonIcon,
  HeaderNavPara,
} from './styled'

class MenuPopup extends Component {
  render() {
    const {isDarkTheme, match} = this.props
    return (
      <div className="popup-container">
        <Popup
          modal
          trigger={
            <MenuButton type="button" isDarkTheme={isDarkTheme}>
              <FiMenu />
            </MenuButton>
          }
        >
          {close => (
            <>
              <PopupContent isDarkTheme={isDarkTheme}>
                <PopupCloseBtn
                  type="button"
                  isDarkTheme={isDarkTheme}
                  onClick={() => close()}
                >
                  <MdClose />
                </PopupCloseBtn>
                <HeaderNavUnorderedList>
                  {navbarList.map(eachTab => (
                    <EachHeaderNavList
                      key={eachTab.id}
                      eachTab={eachTab}
                      matchPath={match.path}
                      isDarkTheme={isDarkTheme}
                      onTabClick={this.onTabClick}
                      close={close}
                    />
                  ))}
                </HeaderNavUnorderedList>
              </PopupContent>
            </>
          )}
        </Popup>
      </div>
    )
  }
}

export default withRouter(MenuPopup)

const EachHeaderNavList = props => {
  const {eachTab, matchPath, isDarkTheme, close} = props
  const {id, displayText, path} = eachTab

  const activeColor = path === matchPath

  const onNavList = () => {
    if (activeColor) {
      close()
    }
  }

  return (
    <HeaderNavList activeTab={activeColor} onClick={onNavList}>
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
