import styled from 'styled-components'

export const HomeVideosListContainer = styled.div`
  padding-top: 15px;
`
export const SearchInputCard = styled.div`
  display: flex;
  align-items: center;
`

export const SearchInput = styled.input`
  outline: none;
  border: 1px solid #616e7c;
  height: 28px;
  margin: 0;
  padding-left: 10px;
  width: 45%;
  font-size: 18px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
  background-color: ${props => (props.isDarkTheme ? 'transparent' : '#ffffff')};
  @media (max-width: 576px) {
    width: 70%;
  }
`
export const SearchButton = styled.button`
  cursor: pointer;
  height: 28px;
  width: 60px;
  font-size: 20px;
  color: #7e858e;
  border: 1px solid #7e858e;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HomeVideosUnorderedList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
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

export const HomeNoResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 2%;
  height: 100%;
  font-family: 'Roboto';
`

export const HomeNoVideosImg = styled.img`
  width: 20%;
`

export const HomeNoVideosHeading = styled.h1`
  margin-bottom: 0px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#231f20')};
`

export const HomeNoVideosPara = styled.p`
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#231f20')};
`

export const HomeNoVideosButton = styled.button`
  width: 100px;
  height: 35px;
  border: 0;
  background-color: #4f46e5;
  color: #f9f9f9;
  border-radius: 8px;
  cursor: pointer;
`

// export const HomeVideosContainer = styled.div``
// export const HomeVideosContainer = styled.div``
