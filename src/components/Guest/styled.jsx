import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Wrapper = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-bg);
`
export const Title = styled.h1`
	font-size: 3rem;
	font-weight: 800;
	color: var(--color-white);
`
export const Caption = styled.h5`
	color: var(--color-white);
`
export const Button = styled(Link)`
	margin-top: 2em;
	font-weight: 700;
	padding: 1em 6em;
	border-radius: 1em;
	background-color: var(--color-primary);
	color: #555;
	text-decoration: none;
`