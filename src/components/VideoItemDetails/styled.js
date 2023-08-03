import styled from 'styled-components'

export const VideoItemPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const NavVideoItemContainer = styled.div`
  display: flex;
`

export const VideoItemContainer = styled.div`
  margin-left: 20%;
  margin-top: 59px;
  height: 100vh;
  width: 100%;
  padding: 10px 16px;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  @media (max-width: 576px) {
    margin-left: 0px;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  padding-top: 15%;
`

export const VideoItemNoResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 2%;
  height: 100%;
  font-family: 'Roboto';
`

export const VideoItemNoVideosImg = styled.img`
  width: 20%;
  @media (max-width: 576px) {
    width: 60%;
  }
`

export const VideoItemNoVideosHeading = styled.h1`
  margin-bottom: 0px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#231f20')};
`

export const VideoItemNoVideosPara = styled.p`
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#231f20')};
`

export const VideoItemNoVideosButton = styled.button`
  width: 100px;
  height: 35px;
  border: 0;
  background-color: #4f46e5;
  color: #f9f9f9;
  border-radius: 8px;
  cursor: pointer;
`

export const VideoPlayerContainer = styled.div`
  width: 100%;
`

// // // // // // // //

export const VideoItemInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 10px;
`

export const VideoItemTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin-top: 0px;
  margin-bottom: 5px;
  overflow: hidden;
  text-align: justify;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#0f0f0f')};
`

export const VideoItemViewDateLikeSaveContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const VideoItemViewDateContainer = styled.div`
  display: flex;
  align-items: center;
  //   justify-content: space-between;
  width: 100%;
  //   height: 100%;
`

export const VideoItemViews = styled.p`
  margin-top: 0px;
  margin-right: 10px;
  font-weight: 550;
  margin-bottom: 0;
  color: ${props => (props.isDarkTheme ? '#64748b' : '#475569')};
`

export const VideoItemPublished = styled.p`
  margin-top: 0px;
  margin-bottom: 0;
  color: ${props => (props.isDarkTheme ? '#64748b' : '#475569')};
  font-weight: 500;
`

export const VideoItemLikeDislikeSaveCard = styled.div`
  display: flex;
  align-items: center;
`

export const ActionLikeIconButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: 0;
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-right: 5px;
  color: ${props => (props.LikeActive ? '#2563eb' : '#64748b')};
`

export const ActionDislikeIconButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: 0;
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-right: 5px;
  color: ${props => (props.DislikeActive ? '#2563eb' : '#64748b')};
`

export const ActionSaveIconButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: 0;
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-right: 5px;
  color: ${props => (props.SavedActive !== undefined ? '#2563eb' : '#64748b')};
`

export const ActionButtonPara = styled.p`
  margin-left: 5px;
`

export const VideoItemCardInfoLogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const VideoItemCardChannelLogo = styled.img`
  align-self: flex-start;
  width: 45px;
  margin-right: 8px;
`

export const VideoItemCardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`

export const VideoItemChannelName = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin-top: 0px;
  margin-bottom: 5px;
  overflow: hidden;
  text-align: justify;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};
`
export const VideoItemChannelSubscribers = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin-top: 0px;
  margin-bottom: 5px;
  overflow: hidden;
  text-align: justify;
  color: ${props => (props.isDarkTheme ? '#64748b' : '#94a3b8')};
`

export const VideoItemChannelDescription = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin-top: 0px;
  margin-bottom: 5px;
  overflow: hidden;
  text-align: justify;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#313131')};
`
