import styled from 'styled-components'

export const HomeEachVideoList = styled.li`
  list-style-type: none;
  margin: 10px;
  width: 280px;
  flex-grow: 1;
`
export const HomeVideoCardThumbnail = styled.img`
  width: 100%;
`

export const HomeVideoCardInfoLogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const HomeVideoCardChannelLogo = styled.img`
  align-self: flex-start;
  width: 45px;
  margin-right: 8px;
`

export const HomeVideoCardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`

export const HomeVideoCardTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin-top: 0px;
  margin-bottom: 5px;
  overflow: hidden;
  text-align: justify;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#0f0f0f')};
`

export const HomeVideoCardChannelName = styled.p`
  color: ${props => (props.isDarkTheme ? '#64748b' : '#475569')};
  font-weight: 550;
  margin-top: 0px;
  margin-bottom: 5px;
`

export const HomeVideoCardViewPublishCard = styled.div`
  display: flex;
  align-items: center;
`

export const HomeVideoCardViews = styled.p`
  margin-top: 0px;
  margin-right: 10px;
  font-weight: 550;
  color: ${props => (props.isDarkTheme ? '#64748b' : '#475569')};
`

export const HomeVideoCardPublished = styled.p`
  margin-top: 0px;
  color: ${props => (props.isDarkTheme ? '#64748b' : '#475569')};
  font-weight: 500;
`
