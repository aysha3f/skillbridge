export const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  type = 'button',
  ...props
}) => {
  const baseStyles = 'font-medium transition-colors duration-200 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-secondary text-white hover:bg-blue-600',
    secondary: 'bg-primary-200 text-primary-900 hover:bg-primary-300',
    ghost: 'text-secondary hover:bg-secondary/10',
    danger: 'bg-danger text-white hover:bg-red-600',
    success: 'bg-accent text-white hover:bg-green-600',
  };

  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
