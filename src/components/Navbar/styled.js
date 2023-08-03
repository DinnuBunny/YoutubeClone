import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  @media (max-width: 576px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20%;
  margin: 0;
  padding-top: 20px;
  padding: 0;
  position: fixed;
  margin-top: 59px;
  height: 90vh;
  overflow: auto;
  background-color: ${props => (props.isDarkTheme ? '#231f20' : '#f9f9f9')};
`

export const HeaderNavUnorderedList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 700px;
  padding-left: 0px;
`

export const HeaderNavList = styled.li`
  cursor: pointer;
  margin-bottom: 6px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  @media (min-width: 576px) and (max-width: 680px) {
    padding-left: 2px;
  }
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
  font-size: 22px;
  color: ${props => getTabColor(props)};
`

export const HeaderNavPara = styled.p`
  font-size: 18px;
  color: ${props => getTabColor(props)};
`
export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  font-family: 'Roboto';
  padding-bottom: 15px;
`

export const ContactUsHeading = styled.p`
  font-size: 18px;
  font-weight: bolder;
  color: ${props => (props.isDarkTheme ? `#f8fafc` : '#1e293b')};
`

export const SocialIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
`

export const SocialLogos = styled.img`
  width: 32px;
  cursor: pointer;
`

export const AboutPara = styled.p`
  font-weight: 525;
  width: 70%;
  color: ${props => (props.isDarkTheme ? `#f8fafc` : '#1e293b')};
`
