import styled from 'styled-components'

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

export const LogoutPopupContent = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f8fafc')};
  height: 150px;
  width: 280px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`

export const LogoutPopupPara = styled.p`
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};
  font-weight: 550;
  text-align: center;
`

export const LogoutPopupBtnCard = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const getBtnBgColor = props => {
  if (!props.isDarkTheme) {
    return '#64738b'
  }

  return '#e3e8f0'
}

export const LogoutPopupBtn = styled.button`
  cursor: pointer;
  outline: none;
  border: ${props =>
    props.outline ? `1.5px solid ${getBtnBgColor(props)}` : 0};
  background-color: ${props => (props.outline ? 'transparent' : '#4f46e5')};
  color: ${props => (props.outline ? getBtnBgColor(props) : '#f1f1f1')};
  width: 80px;
  height: 30px;
  font-weight: 525;
`
