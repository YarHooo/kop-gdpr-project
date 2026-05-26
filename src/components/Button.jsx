import './Button.css';

/**
 * Reusable application button.
 *
 * @param {object} props Component properties.
 * @param {string} props.label Text displayed inside the button.
 * @param {'primary'|'secondary'|'danger'} props.variant Visual button style.
 * @param {boolean} props.disabled Whether the button is disabled.
 * @param {Function} props.onClick Click handler.
 * @returns {JSX.Element} Configurable button component.
 */
export function Button({ label, variant = 'primary', disabled = false, onClick }) {
  return (
    <button
      className={`app-button app-button--${variant}`}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {label}
    </button>
  );
}
