import styled from 'styled-components'

export const HeaderContainer = styled.div`
  position: fixed;
  height: 60px;
  width: 100%;
  padding-top: 5px;
  font-family: 'Roboto';
  background-color: ${props => (props.isDarkTheme ? '#231f20' : '#f9f9f9')};
  display: flex;
  align-items: center;
`

export const HeaderCard = styled.div`
  width: 100%;
  padding: 10px;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 576px) {
    padding-right: 10px;
  }
`

export const HeaderWebsiteLogo = styled.img`
  width: 120px;
  cursor: pointer;
  outline: none;
  @media (max-width: 576px) {
    width: 90px;
  }
`

export const ControlsLarge = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 280px;
  @media (max-width: 576px) {
    display: none;
  }
`

export const ThemeButton = styled.button`
  border: 0px;
  background-color: transparent;
  cursor: pointer;
  font-size: 28px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
  @media (max-width: 576px) {
    font-size: 28px;
  }
`

export const ProfileImage = styled.img`
  width: 34px;
`

export const LogoutButton = styled.button`
  height: 34px;
  border: 1.8px solid #3b82f6;
  background-color: transparent;
  color: #3b82f6;
  font-size: 16px;
  font-weight: 525;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 20px;
  padding-right: 20px;
  cursor: pointer;
  @media (max-width: 576px) {
    border: 0;
    color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
    padding-top: 1px;
    padding-bottom: 1px;
    padding-left: 6px;
    padding-right: 6px;
    font-size: 28px;
  }
`

export const ControlsSmall = styled.div`
  @media (min-width: 576px) {
    display: none;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 180px;
`
