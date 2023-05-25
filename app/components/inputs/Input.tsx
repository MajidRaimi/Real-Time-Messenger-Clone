'use client'

import classnames from 'classnames';
import {
  FieldValues,
  FieldError,
  UseFormRegister,
  FieldErrors
} from 'react-hook-form'

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  disabled?: boolean;
}


const Input: React.FC<InputProps> = ({
  label,
  id,
  type,
  required,
  register,
  errors,
  disabled

}) => {

  return (
    <div className='max-w-sm mx-auto' >
      <label htmlFor={id} className='label'>
        <span className='label-text'>{label}</span>
      </label>
      <input
        id={id}
        autoComplete={id}
        type="text"
        className={classnames('input input-bordered w-full ', { errors: 'input-error' })}
        disabled={disabled}
        {...register(id, { required })}

      />


    </div>
  )
}

export default Input
