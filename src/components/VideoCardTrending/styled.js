import styled from 'styled-components'

export const TrendingEachVideoList = styled.li`
  list-style-type: none;
  margin: 10px;
  width: 100%;
  flex-grow: 1;
`
export const TrendingVideoCardThumbnail = styled.img`
  width: 40%;
  margin-right: 20px;
  @media (max-width: 576px) {
    width: 100%;
  }
`

export const TrendingVideoCardInfoLogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const TrendingVideoCardChannelLogo = styled.img`
  align-self: flex-start;
  width: 45px;
  margin-right: 8px;
  @media (min-width: 576px) {
    display: none;
  }
`

export const TrendingVideoCardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`

export const TrendingVideoCardTitle = styled.p`
  font-size: 16px;
  margin-top: 0px;
  font-weight: 600;
  margin-bottom: 5px;
  overflow: hidden;
  text-align: justify;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#0f0f0f')};
`

export const TrendingVideoCardChannelName = styled.p`
  color: ${props => (props.isDarkTheme ? '#64748b' : '#475569')};
  font-weight: 550;
  margin-top: 0px;
  margin-bottom: 5px;
`

export const TrendingVideoCardViewPublishCard = styled.div`
  display: flex;
  align-items: center;
`

export const TrendingVideoCardViews = styled.p`
  margin-top: 0px;
  margin-right: 10px;
  font-weight: 550;
  color: ${props => (props.isDarkTheme ? '#64748b' : '#475569')};
`

export const TrendingVideoCardPublished = styled.p`
  margin-top: 0px;
  color: ${props => (props.isDarkTheme ? '#64748b' : '#475569')};
  font-weight: 500;
`
