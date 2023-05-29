import { IconType } from 'react-icons';

interface AuthSocialButtonProps {
    icon: IconType;
    onClick: () => void;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
    icon: Icon,
    onClick
}) => {
    return (
        <button type='button' onClick={onClick} className='btn bg-slate-100 border-transparent hover:bg-primary group grow btn-active  '>
            <Icon className='text-primary group-hover:text-white' />
        </button>
    )
}

export default AuthSocialButton
