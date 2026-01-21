export const Select = ({
  label,
  options = [],
  value,
  onChange,
  error,
  disabled = false,
  className = '',
  required = false,
  placeholder = 'Select an option',
  ...props
}) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="label-base">
          {label}
          {required && <span className="text-danger ml-1">*</span>}
        </label>
      )}
      <select
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`input-base ${
          error ? 'border-danger focus:ring-danger' : ''
        } ${className}`}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-sm text-danger">{error}</p>}
    </div>
  );
};
