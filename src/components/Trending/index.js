import NxtWatchContext from '../../context/NxtWatchContext'
import Navbar from '../Navbar'
import Header from '../Header'
import TrendingVideosList from '../TrendingVideosList'
import './index.css'
import {
  TrendingPageContainer,
  TrendingContainer,
  TrendingBannerVideoContainer,
} from './styled'

const Trending = () => {
  console.log('Trending')

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <TrendingPageContainer data-testid="trending">
            <Header />
            <TrendingContainer>
              <Navbar />
              <TrendingBannerVideoContainer isDarkTheme={isDarkTheme}>
                <TrendingVideosList />
              </TrendingBannerVideoContainer>
            </TrendingContainer>
          </TrendingPageContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default Trending
