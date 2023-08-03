import {Component} from 'react'
import Cookie from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  PageContainer,
  Container,
  LoginWebsiteLog,
  FormContainer,
  Label,
  Input,
  ShowPasswordCard,
  ShowCheckbox,
  ShowCheckboxLabel,
  LoginButton,
  ErrorPara,
} from './styled'

const lightWebsiteLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
const darkWebsiteLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

class Login extends Component {
  state = {
    showPassword: false,
    loginDetails: {username: '', password: ''},
    errorMessage: '',
  }

  getTheErrorMessage = () => {
    const {errorMessage} = this.state
    if (errorMessage !== ``) {
      return <ErrorPara>*{errorMessage}</ErrorPara>
    }
    return null
  }

  onLoginSuccess = jwtToken => {
    const {history} = this.props
    Cookie.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onLogin = async event => {
    event.preventDefault()
    const {loginDetails} = this.state
    const loginApi = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(loginDetails),
    }
    const response = await fetch(loginApi, options)
    const data = await response.json()
    if (response.ok) {
      this.onLoginSuccess(data.jwt_token)
    } else {
      console.log(data)
      this.setState({errorMessage: data.error_msg})
    }
  }

  onUsernameEnter = event => {
    this.setState(prevState => ({
      loginDetails: {...prevState.loginDetails, username: event.target.value},
    }))
  }

  onPasswordEnter = event => {
    this.setState(prevState => ({
      loginDetails: {...prevState.loginDetails, password: event.target.value},
    }))
  }

  showPasswordCheck = event => {
    this.setState({showPassword: event.target.checked})
  }

  render() {
    const token = Cookie.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }

    const {showPassword, loginDetails} = this.state
    const {username, password} = loginDetails
    const passwordType = showPassword ? 'text' : 'password'
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <PageContainer isDarkTheme={isDarkTheme}>
              <Container isDarkTheme={isDarkTheme}>
                <LoginWebsiteLog
                  src={isDarkTheme ? darkWebsiteLogo : lightWebsiteLogo}
                  alt="website logo"
                />
                <FormContainer onSubmit={this.onLogin}>
                  <Label htmlFor="username" isDarkTheme={isDarkTheme}>
                    USERNAME
                  </Label>
                  <Input
                    type="text"
                    onChange={this.onUsernameEnter}
                    value={username}
                    placeholder="Username"
                    id="username"
                    isDarkTheme={isDarkTheme}
                  />
                  <Label htmlFor="password" isDarkTheme={isDarkTheme}>
                    PASSWORD
                  </Label>
                  <Input
                    type={passwordType}
                    onChange={this.onPasswordEnter}
                    value={password}
                    placeholder="Password"
                    id="password"
                    isDarkTheme={isDarkTheme}
                  />
                  <ShowPasswordCard>
                    <ShowCheckbox
                      type="checkbox"
                      onChange={this.showPasswordCheck}
                      id="showPassword"
                    />
                    <ShowCheckboxLabel
                      isDarkTheme={isDarkTheme}
                      htmlFor="showPassword"
                    >
                      Show Password
                    </ShowCheckboxLabel>
                  </ShowPasswordCard>
                  <LoginButton type="submit">Login</LoginButton>
                  {this.getTheErrorMessage()}
                </FormContainer>
              </Container>
            </PageContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
