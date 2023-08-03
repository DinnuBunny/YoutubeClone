import NxtWatchContext from '../../context/NxtWatchContext'
import Navbar from '../Navbar'
import Header from '../Header'
import GamingVideosList from '../GamingVideosList'
import './index.css'
import {
  GamingPageContainer,
  GamingContainer,
  GamingBannerVideoContainer,
} from './styled'

const Gaming = () => {
  console.log('Gaming')

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <GamingPageContainer data-testid="gaming">
            <Header />
            <GamingContainer>
              <Navbar />
              <GamingBannerVideoContainer isDarkTheme={isDarkTheme}>
                <GamingVideosList />
              </GamingBannerVideoContainer>
            </GamingContainer>
          </GamingPageContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default Gaming
