import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { SettingsOutline } from '@styled-icons/evaicons-outline'
import { User } from '@styled-icons/boxicons-regular'

export const Wrapper = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    padding: .5em 2em;
`
export const Title = styled.h1`
    font-size: 2rem;
    color: var(--color-white);
`
export const Container = styled.div`
    display: flex;
    align-items: center;
    grid-gap: 0 1em;
`
export const DateNow = styled.p`
    color: var(--color-white);
    font-size: .9rem;
`
export const Button = styled(Link)`
  padding: .5em 1em;
  background-color: #f4f5f6;
  border-radius: .5em;
  display: flex;
  align-items: center;
  grid-gap: .8em;
  cursor: pointer;
`
export const SettingIcon = styled(SettingsOutline)`
  color: #000;
`
export const UserIcon = styled(User)`
  color: #000;
`