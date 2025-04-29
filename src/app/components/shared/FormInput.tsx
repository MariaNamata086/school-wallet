import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  helperText?: string | false;
  label?: string;
  required?: boolean;
  errorText?: string | undefined;
  icon?: any;
}

function FormInput(props: InputProps) {
  const {
    type,
    placeholder,
    label,
    name,
    id,
    value,
    onChange,
    error,
    helperText,
    required,
    errorText,
    icon,
  } = props;

  const [passwordVisible, setPasswordVisible] = useState(false);

  const borderColor = error ? '#e53e3e' : '#e9e8e6';

  return (
    <div className='flex flex-col gap-[8px] w-full'>
      {label && (
        <label htmlFor={id} className='pl-[4px] text-slate-600 text-[11px]'>
          {label} {required && <span className='text-red-500'>*</span>}
        </label>
      )}
      <div className='flex items-center bg-white relative gap-2 px-[8px] py-[3px] text-slate-700'>
        <FontAwesomeIcon icon={icon} />
        <input
          style={{
            borderWidth: '0.5px',
            borderStyle: 'solid',
            backgroundColor: '#e9e8e690',
            borderRadius: '3px',
            width: '100%',
            fontSize: '12px',
          }}
          className={`flex transition-all duration-75 focus:border-[0.5px] focus:outline outline-slate-500 focus:shadow-sm focus:${borderColor} px-[10px] h-[40px]`}
          type={
            // eslint-disable-next-line no-nested-ternary
            type === 'password' ? (passwordVisible ? 'text' : 'password') : type
          }
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        {type === 'password' && (
          <div
            className='absolute inset-y-0 right-0 pr-2 flex items-center cursor-pointer'
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
          </div>
        )}
      </div>
      <span
        className={`pl-2 text-[10px] ${
          errorText ? 'text-red-500' : 'text-gray-400'
        }`}
      >
        {errorText || helperText}
      </span>
    </div>
  );
}

export default FormInput;
