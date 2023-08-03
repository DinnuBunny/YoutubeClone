import styled from 'styled-components'

export const GamingVideosListContainer = styled.div`
  padding-top: 15px;
`

export const GamingVideosUnorderedList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 10px;
  @media (max-width: 576px) {
    padding-left: 0;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  padding-top: 15%;
`

export const GamingNoResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 2%;
  height: 100vh;
  font-family: 'Roboto';
`

export const GamingNoVideosImg = styled.img`
  width: 20%;
  @media (max-width: 576px) {
    width: 60%;
  }
`

export const GamingNoVideosHeading = styled.h1`
  margin-bottom: 0px;
  text-align: center;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#231f20')};
  @media (max-width: 576px) {
    font-size: 22px;
  }
`

export const GamingNoVideosPara = styled.p`
  text-align: center;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#231f20')};
  @media (max-width: 576px) {
    font-size: 14px;
  }
`

export const GamingNoVideosButton = styled.button`
  width: 100px;
  height: 35px;
  border: 0;
  background-color: #4f46e5;
  color: #f9f9f9;
  border-radius: 8px;
  cursor: pointer;
`

export const GamingBanner = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ebebeb')};
  display: flex;
  align-items: center;
  padding-left: 30px;
`

export const GamingBannerButton = styled.button`
  margin-right: 15px;
  border-radius: 50%;
  height: 55px;
  width: 55px;
  font-size: 22px;
  color: #ff0b37;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#cbd5e1')};
`
export const GamingBannerText = styled.h1`
  font-size: 28px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#212121')};
`
