import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { listen } from '../.././app/listener';
import { useState } from 'react';
import { Wrapper, Title, Container, DateNow, Button, SettingIcon, UserIcon } from './styled'

const getTime = () => {
  const d = new Date()
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const day = days[d.getDay()]
  const date = d.getDate()
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const month = months[d.getMonth()]
  const year = d.getFullYear()
  let hour = d.getHours()
  let minute = d.getMinutes()
  let second = d.getSeconds()
  hour = hour < 10 ? '0' + hour : hour
  minute = minute < 10 ? '0' + minute : minute
  second = second < 10 ? '0' + second : second
  const currentTime = `${day}, ${date} ${month} ${year}, ${hour}:${minute}:${second}`
  return currentTime
}

const MenuIcon = () => {
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    listen();
  }, [])

  if (auth.user) {
    return (
      <Button to='/dashboard'><SettingIcon size='24' /></Button>
    )
  } else {
    return (
      <Button to='/auth/signin'><UserIcon size='24' /></Button>
    )
  }
}

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState(getTime())

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getTime())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Wrapper>
      <Title>Toko Yogi</Title>
      <Container>
        <DateNow>{currentTime}</DateNow>
        <MenuIcon />
      </Container>
    </Wrapper>
  )
}

export default Navbar