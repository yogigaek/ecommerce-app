import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 20%;
	height: 100%;
	padding: 1em 0;
	background-image: url(../../../assets/bg-texture.png)
`
export const Title = styled(Link)`
	margin: 1em .5em;
	font-size: 2rem;
	font-weight: 700;
	color: #fff;
	text-decoration: none;
`
export const Container = styled.div`
	display: flex;
	flex-direction: column;
`
export const Navigation = styled(Link)`
	padding: 1em 1.2em;
	text-decoration: none;
	color: #eee;
	transition: .4s all;
	&:hover {
		color: #000;
		background-color: var(--color-primary);
	}
`
export const Button = styled(Link)`
	margin: 0 1em;
	padding: .5em 0;
	text-align: center;
	text-decoration: none;
	height: 2.6em;
	border: none;
	font-weight: 600;
	border-radius: .5em;
	background-color: transparent;
	border: 1px solid #fbecee;
	color: #fbecee;
	cursor: pointer;
	&:hover {
		background-color: #fbecee;
		color: #ed5575;
	}
`