import { ReactNode } from 'react';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type ButtonProps = {
  children?: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
  style?: React.CSSProperties;
  className?: string;
  intent?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'small' | 'medium';
  textColor?: string;
  textSize?: string;
};

export default function Button({
  children,
  loading,
  disabled,
  textColor = 'text-white',
  textSize,
  type = 'submit',
  className,
  // size = 'medium',
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={loading || disabled}
      type={type}
      {...props}
      className={`flex h-[40px] border-none w-[50%] bg-primary justify-center items-center  hover:scale-105 py-[10px] px-[16px] font-bold rounded-md text-[25px] md:text-[35px] ${textSize} ${className}`}
      style={{
        cursor: disabled ? 'not-allowed' : 'pointer',
        color: textColor || '#FFFFFFF',
        background: disabled ? 'oklch(55.4% 0.046 257.417)' : '#53C9EB',
      }}
    >
      {loading ? (
        <FontAwesomeIcon
          icon={faCircleNotch}
          className='text-[20px] animate-spin'
        />
      ) : (
        children
      )}
    </button>
  );
}
