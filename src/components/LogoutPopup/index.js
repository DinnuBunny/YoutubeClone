import Popup from 'reactjs-popup'

import {FiLogOut} from 'react-icons/fi'
import {
  LogoutButton,
  LogoutPopupContent,
  LogoutPopupPara,
  LogoutPopupBtnCard,
  LogoutPopupBtn,
} from './styled'

const LogoutPopup = props => {
  const {isDarkTheme, type, onLogoutApp} = props

  const onConfirmLogout = () => {
    onLogoutApp()
  }

  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <LogoutButton type="button" isDarkTheme={isDarkTheme}>
            {type === 'icon' && <FiLogOut />}
            {type === 'text' && 'Logout'}
          </LogoutButton>
        }
      >
        {close => (
          <>
            <LogoutPopupContent isDarkTheme={isDarkTheme}>
              <LogoutPopupPara isDarkTheme={isDarkTheme}>
                Are you sure, you want to logout?
              </LogoutPopupPara>
              <LogoutPopupBtnCard>
                <LogoutPopupBtn
                  type="button"
                  isDarkTheme={isDarkTheme}
                  outline
                  onClick={() => close()}
                >
                  Cancel
                </LogoutPopupBtn>
                <LogoutPopupBtn
                  type="button"
                  isDarkTheme={isDarkTheme}
                  onClick={onConfirmLogout}
                >
                  Confirm
                </LogoutPopupBtn>
              </LogoutPopupBtnCard>
            </LogoutPopupContent>
          </>
        )}
      </Popup>
    </div>
  )
}

export default LogoutPopup
