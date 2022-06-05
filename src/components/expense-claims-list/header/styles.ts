import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 18px;
  }
  button {
    background: red !important;
    a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
      span {
        margin-left: 5px;
      }
    }
  }
`