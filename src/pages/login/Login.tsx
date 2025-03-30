import { Dispatch, SetStateAction } from 'react';

interface LoginProps {
  setUserType: Dispatch<SetStateAction<string | null>>;
}

const Login = ({ setUserType }: LoginProps) => {
  return (
    <div>Login</div>
  )
}

export default Login