import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { registerUser } from '../../../app/api/auth'
import { useNavigate } from 'react-router-dom'
import { Wrapper, Container, Title, Field, Feedback, Button, Alert, Text, TextLink, Span, Icon, Icon1 } from './styled'
import { FaEyeSlash } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';

const schema = yup.object({
  fullname: yup.string().required('Nama Lengkap harus diisi'),
  email: yup.string().email().required('Email harus valid'),
  password: yup.string().min(8, 'Minimal panjang password harus 8 karakter').required('Password Harus diisi'),
  password_confirmation: yup.string().oneOf([yup.ref('password'), null], 'Password konfirmasi tidak sama'),
}).required();


const statusList = {
  idle: 'idle',
  process: 'process',
  success: 'success',
  error: 'error'
}

const Register = () => {
  const {register, handleSubmit, formState: {errors}, setError} = useForm({
    resolver: yupResolver(schema)
  });
  const [status, setStatus] = useState(statusList.idle);
  const navigate = useNavigate();
  const [ setPassword, setShowPassword ] = useState(false);
  const [setConfirmPassword, setConfirmShowPassword] = useState(false);

  const onSubmit = async formData => {
    setStatus(statusList.process);
    const { data } = await registerUser(formData);
    if(data.error) {
      let fields = Object.keys(data.fields);
      fields.forEach(field => setError(field, {type: 'server', message: data.fields[field]?.properties?.message}));
      setStatus(statusList.error);
      return;
    }
    setStatus(statusList.success);
  };

  const toogleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  const toogleConfirmShowPassword = () => {
    setConfirmShowPassword((prevState) => !prevState);
  };

	return (
		<Wrapper>
		{ status === statusList.success ? <Alert> Sign up success, please <Span onClick={() => navigate('/auth/signin')}>login</Span> with your email and password account </Alert> : null }
			<Container onSubmit={handleSubmit(onSubmit)}>			
				<Title>Sign Up</Title>
				<Field 
					type='text' 
					placeholder='Name' 
					isInvalid={errors.fullname}
					{...register('fullname')}
				/>
				<Feedback>{ errors.fullname?.message }</Feedback>

				<Field 
					type='email' 
					placeholder='Email Address' 
					isInvalid={errors.email}
					{...register('email')}
				/>
				<Feedback>{ errors.email?.message }</Feedback>

				<Field 
					type={setPassword ? 'text' : 'password'}
          placeholder="Password" 
          isInvalid={errors.password}
          {...register('password')}
        />
        <Icon onClick={toogleShowPassword}>
        {setPassword ? <FaEyeSlash /> : <FaEye />}
          </Icon>
				<Feedback>{ errors.password?.message }</Feedback>

				<Field 
					type={setConfirmPassword ? 'text' : 'password'} 
          placeholder="Confirm Password" 
          isInvalid={errors.password_confirmation}
          {...register('password_confirmation')}
        />
        <Icon1 onClick={toogleConfirmShowPassword}>
        {setConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </Icon1>
				<Feedback>{ errors.password_confirmation?.message }</Feedback>

				<Button type="submit" disabled={status === statusList.process}>
					{ status === statusList.process ? 'Loading...' : 'Register'}
				</Button>

				<Text>Already have an account ? <TextLink to="/auth/signin">Sign in!</TextLink></Text>
			</Container>
		</Wrapper>
	)
}

export default Register