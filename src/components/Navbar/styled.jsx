import { Link } from 'react-router-dom'
import { keyframes } from 'styled-components'
import styled from 'styled-components'
import { SettingsOutline } from '@styled-icons/evaicons-outline'
import { User } from '@styled-icons/boxicons-regular'

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  padding: 1em 2em;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Title = styled.h1`
  font-size: 2rem;
  color: var(--color-white);
  font-family: 'Montserrat', sans-serif;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);

  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 0 1em;

  @media only screen and (max-width: 768px) {
    margin-top: 1em;
  }
`

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`

export const DateNow = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif; 
  letter-spacing: 0.05em; 
  padding: 0 2em;
  margin: 0.5em 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5em;
  width: auto;
  background: linear-gradient(45deg, var(--color-blue), var(--color-purple));
  color: var(--color-white);
  border-radius: 1.5em;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.5);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} 1s ease-in-out both;
  
  @media only screen and (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 1em;
    padding: 0 1em;
  }
`

export const Button = styled(Link)`
  padding: .5em 1em;
  background-color: var(--color-white);
  border-radius: .5em;
  display: flex;
  align-items: center;
  grid-gap: .8em;
  cursor: pointer;
  color: var(--color-black);
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);

  @media only screen and (max-width: 768px) {
    font-size: .8rem;
  }
`

export const SettingIcon = styled(SettingsOutline)`
  color: var(--color-black);
`

export const UserIcon = styled(User)`
  color: var(--color-black);
`
