import styled from 'styled-components'

export const GamingEachVideoList = styled.li`
  list-style-type: none;
  margin: 10px;
  width: 25%;
  flex-grow: 1;
  @media (max-width: 576px) {
    width: 35%;
  }
`
export const GamingVideoCardThumbnail = styled.img`
  width: 95%;
  margin-right: 20px;
  @media (max-width: 576px) {
    width: 100%;
  }
`

export const GamingVideoCardInfoLogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`

export const GamingVideoCardChannelLogo = styled.img`
  align-self: flex-start;
  width: 45px;
  margin-right: 8px;
  @media (min-width: 576px) {
    display: none;
  }
`

export const GamingVideoCardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`

export const GamingVideoCardTitle = styled.p`
  font-size: 16px;
  margin-top: 0px;
  font-weight: 600;
  margin-bottom: 5px;
  overflow: hidden;
  text-align: justify;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#0f0f0f')};
`

export const GamingVideoCardChannelName = styled.p`
  color: ${props => (props.isDarkTheme ? '#64748b' : '#475569')};
  font-weight: 550;
  margin-top: 0px;
  margin-bottom: 5px;
`

export const GamingVideoCardViewPublishCard = styled.div`
  display: flex;
  align-items: center;
`

export const GamingVideoCardViews = styled.p`
  margin-top: 0px;
  margin-right: 10px;
  font-weight: 550;
  color: ${props => (props.isDarkTheme ? '#64748b' : '#475569')};
`

export const GamingVideoCardPublished = styled.p`
  margin-top: 0px;
  color: ${props => (props.isDarkTheme ? '#64748b' : '#475569')};
  font-weight: 500;
`
