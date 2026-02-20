import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  href,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-600',
    secondary: 'bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-800',
    outline:
      'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-600',
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={combinedStyles}
      {...props}>
      {children}
    </button>
  );
}
