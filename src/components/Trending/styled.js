import styled from 'styled-components'

// #0f0f0f #f9f9f9

export const TrendingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const TrendingContainer = styled.div`
  display: flex;
`
export const TrendingBannerVideoContainer = styled.div`
  margin-left: 20%;
  margin-top: 59px;
  height: 100%;
  width: 100%;
  padding: 10px 16px;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  @media (max-width: 576px) {
    margin-left: 0px;
  }
`
