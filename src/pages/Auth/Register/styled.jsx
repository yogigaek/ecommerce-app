import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Wrapper = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	background-image: url(../../../assets/bg-texture.png);
	background: var(--color-bg); 
`
export const Container = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 1em;
	padding: 2em;
	background-color: #eee;
`
export const Title = styled.h1`
`
export const Field = styled.input`
	margin: 1em 0;
	padding: 1em 2em;
	border: none;
	box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
	outline: none;
	border-radius: 1em;
`
export const FieldWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Icon = styled.span`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const Feedback = styled.p`
	font-size: .8rem;
	margin: 0 auto 0 2em;
	color: red;
`
export const Button = styled.button`
	margin: 1em 0;
	padding: 1em 2em;
	border: none;
	outline: none;
	border-radius: 1em;
	font-weight: 800;
	box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
	background: var(--color-primary);
	color: var(--color-white);
	color: #fff;
	cursor: pointer;
`
export const Alert = styled.div`
	position: absolute;
	top: 4%;
	text-align: center;
	padding: 1em 2em;
	background: #ffff;
	border-radius: 1em;
	background: #2cff57;
`
export const Text = styled.p`
	font-size: .8rem;
	color: #666;
`

export const TextLink = styled(Link)`
	text-decoration: none;
	font-weight: 600;
	color: var(--color-bg-variant);
`
export const Span = styled.span`
	font-weight: 600;
	cursor: pointer;
	color: blue;
`