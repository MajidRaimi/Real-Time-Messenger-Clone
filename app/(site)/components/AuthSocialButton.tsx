import { IconType } from 'react-icons';

interface AuthSocialButtonProps {
    icon: IconType;
    onClick: () => void;
}

const AuthSocialButton : React.FC<AuthSocialButtonProps> = ({
    icon : Icon,
    onClick
}) => {
    return (
        <button type='button' onClick={onClick} className='btn btn-ghost grow btn-active bg-opacity-50'>
            <Icon className=''/>
        </button>
    )
}

export default AuthSocialButton
