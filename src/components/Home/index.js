import {Component} from 'react'

import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import Navbar from '../Navbar'
import HomeBanner from '../HomeBanner'
import HomeVideosList from '../HomeVideosList'
import './index.css'
import {
  HomePageContainer,
  HomeContainer,
  HomeBannerVideoContainer,
} from './styled'

class Home extends Component {
  state = {showBanner: true}

  closeHomeBanner = () => {
    this.setState({showBanner: false})
  }

  render() {
    const {showBanner} = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <HomePageContainer isDarkTheme={isDarkTheme} data-testid="home">
              <Header />
              <HomeContainer>
                <Navbar />
                <HomeBannerVideoContainer isDarkTheme={isDarkTheme}>
                  {showBanner && (
                    <HomeBanner closeHomeBanner={this.closeHomeBanner} />
                  )}
                  <HomeVideosList />
                </HomeBannerVideoContainer>
              </HomeContainer>
            </HomePageContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
