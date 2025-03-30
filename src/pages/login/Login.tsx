import { Dispatch, SetStateAction } from 'react';

interface LoginProps {
  setUser: (user: { name: string; email: string; role: string } | null) => void;
}

const Login: React.FC<LoginProps> = ({ setUser }) => {
  return (
    <div>Login</div>
  )
}

export default Login