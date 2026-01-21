import { X } from 'lucide-react';

export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  closeButton = true,
}) => {
  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 transition-opacity duration-200"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        className={`relative bg-white rounded-lg shadow-lg ${sizeClasses[size]} w-full mx-4 animate-slideIn`}
      >
        {/* Header */}
        {(title || closeButton) && (
          <div className="flex items-center justify-between border-b border-primary-200 p-6">
            <h2 className="text-xl font-bold text-primary-900">{title}</h2>
            {closeButton && (
              <button
                onClick={onClose}
                className="text-primary-500 hover:text-primary-700 transition-colors"
              >
                <X size={24} />
              </button>
            )}
          </div>
        )}

        {/* Content */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};
