import { Link } from 'react-router-dom'
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

export const DateNow = styled.p`
  color: var(--color-white);
  font-size: 1.2rem;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5em;
  width: 14em;
  background-color: var(--color-white);
  color: var(--color-black);
  border-radius: 1.5em;
  padding: 0 1em;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

  @media only screen and (max-width: 768px) {
    width: auto;
    font-size: 1rem;
    margin-bottom: 1em;
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
