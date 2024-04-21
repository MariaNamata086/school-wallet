import { ChangeEvent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  helperText?: string | false;
  label?: string;
  required?: boolean;
  errorText?: string | undefined;
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
  } = props;

  const [number, setNumber] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const formatNumber = (event: ChangeEvent<HTMLInputElement>) => {
    if (type === 'number') {
      // Remove existing commas and non-digit characters from the input value, except decimal point
      let formattedValue = event.target.value.replace(/[^0-9.]/g, '');

      // Split the value into whole number and decimal parts
      const parts = formattedValue.split('.');

      // Add commas after every 3 digits in the whole number part
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

      // Join the parts back together
      formattedValue = parts.join('.');

      setNumber(formattedValue);

      // Update the input value with the formatted number
      event.target.value = formattedValue.replace(/,/g, '');
    }

    // Call the onChange event if provided
    if (onChange) {
      onChange(event);
    }
  };

  const borderColor = error ? '#e53e3e' : '#e9e8e6';

  return (
    <div className='flex flex-col gap-[8px] w-full'>
      {label && (
        <label htmlFor={id} className='pl-[4px] text-slate-600 text-[11px]'>
          {label} {required && <span className='text-red-500'>*</span>}
        </label>
      )}
      <div className='relative'>
        {' '}
        {/* Wrap the input and the icon in a div */}
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
            type === 'password'
              ? passwordVisible
                ? 'text'
                : 'password'
              : 'text'
          }
          value={type === 'number' ? number : value}
          onChange={formatNumber}
          id={id}
          name={name}
          placeholder={placeholder}
        />
        {type === 'password' && (
          <div
            className='absolute inset-y-0 right-0 pr-2 flex items-center cursor-pointer '
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
