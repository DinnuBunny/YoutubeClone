import styled from 'styled-components'

// MenuPopup

export const MenuButton = styled.div`
  border: 0;
  background-color: transparent;
  font-size: 28px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
`

export const PopupContent = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
`

export const PopupCloseBtn = styled.button`
  align-self: flex-end;
  background-color: transparent;
  border: 0;
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
`
export const HeaderNavUnorderedList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 700px;
  padding-left: 0px;
`

export const HeaderNavList = styled.li`
  width: 100%;
  padding-left: 80px;
  padding-right: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.activeTab ? '#d7dfe9' : 'none')};
`

const getTabColor = props => {
  if (props.activeTab) {
    return '#ff0b37'
  }

  if (!props.activeTab && props.isDarkTheme) {
    return '#f9f9f9'
  }
  return '#383838'
}

export const HeaderNavButtonIcon = styled.button`
  margin-right: 15px;
  border: 0;
  background-color: transparent;
  font-size: 28px;
  color: ${props => getTabColor(props)};
`

export const HeaderNavPara = styled.p`
  font-size: 26px;
  color: ${props => getTabColor(props)};
`
