import styled from 'styled-components'

export const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#231f20' : '#f9f9f9')};
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  box-shadow: ${props =>
    props.isDarkTheme ? 'none' : '0px 5px 20px 8px gray'};
  padding: 30px;
  border-radius: 12px;
  font-family: roboto;
  width: 350px;
`
export const LoginWebsiteLog = styled.img`
  align-self: center;
  width: 180px;
  margin-bottom: 15px;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`
export const Label = styled.label`
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 5px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#475569')};
`
export const Input = styled.input`
  width: 100%;
  border: 1px solid gray;
  outline: none;
  padding: 10px;
  padding-left: 5px;
  height: 35px;
  color: auto;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#0f0f0f')};
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`
export const ShowPasswordCard = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`
export const ShowCheckbox = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 10px;
`

export const ShowCheckboxLabel = styled.label`
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};
`
export const LoginButton = styled.button`
  border: 0px;
  border-radius: 8px;
  background-color: #4f46e5;
  color: #ffffff;
  height: 35px;
  font-weight: 550;
  cursor: pointer;
  outline: none;
`
export const ErrorPara = styled.p`
  color: #ff0000;
`
