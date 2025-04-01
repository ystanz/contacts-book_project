import styled from 'styled-components'
import { colors } from '../../styles'

export const FormWrapper = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-bottom: 1.8rem;

  input[name='contact-number'] {
    width: 16rem;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 0.8rem;
    align-items: start;
  }
`

export const FormInput = styled.input`
  font-size: 1.6rem;
  background-color: ${colors.lightGray};
  border-radius: 0.8rem;
  border: none;
  width: 24rem;
  height: 2.4rem;
  text-align: center;

  @media (max-width: 767px) {
    font-size: 1.2rem;
    width: 100%;
  }
`

export const FormButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  img {
    max-height: 3.5rem;
    height: 100%;
  }
`

export const ActionButons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 0.8rem;

  @media (max-width: 767px) {
    align-self: flex-end;
  }
`
