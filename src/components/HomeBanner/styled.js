import styled from 'styled-components'

export const BannerContainer = styled.div`
  font-family: 'Roboto';
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  padding: 5px;
  padding-left: 20px;
  padding-top: 12px;
  padding-bottom: 15px;
  border-radius: 8px;
`

export const BannerLogoCloseCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const BannerWebsiteLogo = styled.img`
  width: 180px;
  @media screen and (max-width: 576px) {
    width: 120px;
  }
`

export const BannerCloseButton = styled.button`
  border: 0;
  background-color: transparent;
  font-size: 22px;
  cursor: pointer;
  outline: none;
`

export const BannerTitle = styled.p`
  color: #1e293b;
  font-weight: 500;
  font-size: 22px;
  width: 40%;
  @media screen and (max-width: 576px) {
    font-size: 18px;
    width: 80%;
  }
`

export const GetItNowButton = styled.button`
  color: #1e293b;
  border: 1px solid #1e293b;
  background-color: transparent;
  font-weight: 650;
  width: 120px;
  height: 35px;
  @media screen and (max-width: 576px) {
    width: 100px;
    height: 30px;
    font-size: 13px;
  }
`
