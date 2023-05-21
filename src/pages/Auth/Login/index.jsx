import * as yup from 'yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../app/api/auth';
import { userLogin } from '../../../app/features/Auth/actions';
import { useNavigate } from 'react-router-dom';
import { Wrapper, Icon, Container, Title, Field, Feedback, Button, Text, TextLink, FieldWrapper } from './styled';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';

export const schema = yup.object({
  email: yup.string().email('Email harus valid').required('Email harus diisi'),
  password: yup.string().min(8, 'Password minimal 8 karakter').required('Password harus diisi'),
}).required();

export const statusList = {
  idle: 'idle',
  process: 'process',
  success: 'success',
  error: 'error',
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [status, setStatus] = useState(statusList.idle);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    setStatus(statusList.process);
    try {
      const { data } = await loginUser(formData);
      console.log(data);
      if (data.error) {
        setError('password', { type: 'invalidCredential', message: data.message });
        setError('email', { type: 'invalidCredential', message: data.message });
        setStatus(statusList.error);
      } else {
        const user = data.data;
        const token = data.signed;
        dispatch(userLogin({ user, token }));
        setStatus(statusList.success);
        navigate('/');
      }
    } catch (error) {
      console.error(error);
      setError('password', { type: 'server', message: "Server error" });
      setError('email', { type: 'server', message: "Server error" });
      setStatus(statusList.error);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <Wrapper>
      <Container onSubmit={handleSubmit(onSubmit)}>
        <Title>Sign In</Title>
        <Field
          type='email'
          placeholder='Email Address'
          isInvalid={errors.email || (status === statusList.error)}
          {...register('email')}
        />
        <Feedback>{(errors.email && errors.email.message) || (status === statusList.error && 'Email atau password salah')}</Feedback>

        <FieldWrapper>
          <Field
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            isInvalid={errors.password || (status === statusList.error)}
            {...register('password')}
          />
          <Icon onClick={toggleShowPassword}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </Icon>
        </FieldWrapper>
        
        <Feedback>{(errors.password && errors.password.message) || (status === statusList.error && 'Email atau password salah')}</Feedback>
        <Button type='submit' disabled={status === statusList.process}>
          {status === statusList.process ? 'Loading...' : 'Login'}
        </Button>

        <Text>
          Don't have an account ? <TextLink to='/auth/signup'>Sign up!</TextLink>
        </Text>
      </Container>
    </Wrapper>
  );
};

export default Login;
