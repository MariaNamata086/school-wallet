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
  size = 'medium',
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={loading || disabled}
      type={type}
      {...props}
      className={`h-[40px] border-none w-full bg-primary color-white justify-center items-center bg-teal-700 hover:bg-teal-600 hover:scale-105 py-[8px] px-[16px] rounded-md ${textColor} ${textSize}`}
      style={{
        cursor: disabled ? 'not-allowed' : 'pointer',
        fontSize: size === 'small' ? 10 : 12,
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
