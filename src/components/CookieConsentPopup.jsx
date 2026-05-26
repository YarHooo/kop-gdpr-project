import { useEffect, useState } from 'react';
import { Button } from './Button';
import './CookieConsentPopup.css';

const STORAGE_KEY = 'kop_gdpr_cookie_preferences';

const defaultPreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

/**
 * GDPR-oriented cookie consent popup.
 * Stores user preferences in localStorage and allows accepting, rejecting, or customizing optional cookies.
 *
 * @param {object} props Component properties.
 * @param {string} props.projectName Project name displayed in the popup.
 * @param {boolean} props.forceVisible Forces popup visibility for previews and Storybook.
 * @returns {JSX.Element|null} Cookie popup or null if consent has already been saved.
 */
export function CookieConsentPopup({ projectName = 'KOP GDPR Project', forceVisible = false }) {
  const [visible, setVisible] = useState(forceVisible);
  const [customize, setCustomize] = useState(false);
  const [preferences, setPreferences] = useState(defaultPreferences);

  useEffect(() => {
    if (forceVisible) {
      setVisible(true);
      return;
    }

    const savedPreferences = localStorage.getItem(STORAGE_KEY);
    setVisible(!savedPreferences);
  }, [forceVisible]);

  const savePreferences = (nextPreferences) => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ ...nextPreferences, savedAt: new Date().toISOString() }),
    );
    setPreferences(nextPreferences);
    setVisible(forceVisible);
  };

  const togglePreference = (key) => {
    if (key === 'necessary') return;
    setPreferences((current) => ({ ...current, [key]: !current[key] }));
  };

  if (!visible) return null;

  return (
    <section className="cookie-popup" aria-label="Cookie consent popup">
      <div className="cookie-popup__content">
        <p className="cookie-popup__eyebrow">GDPR Cookie Consent</p>
        <h2>Налаштування cookies для {projectName}</h2>
        <p>
          Ми використовуємо необхідні cookies для роботи сайту. Аналітичні та маркетингові cookies
          вмикаються тільки після вашої згоди. Ви можете прийняти всі, відхилити необов’язкові або
          налаштувати категорії окремо.
        </p>

        {customize && (
          <div className="cookie-popup__options">
            <label>
              <input type="checkbox" checked={preferences.necessary} disabled readOnly />
              <span>
                <strong>Necessary</strong>
                потрібні для базової роботи сайту
              </span>
            </label>
            <label>
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={() => togglePreference('analytics')}
              />
              <span>
                <strong>Analytics</strong>
                допомагають зрозуміти використання сайту
              </span>
            </label>
            <label>
              <input
                type="checkbox"
                checked={preferences.marketing}
                onChange={() => togglePreference('marketing')}
              />
              <span>
                <strong>Marketing</strong>
                використовуються для персоналізованого контенту
              </span>
            </label>
          </div>
        )}

        <div className="cookie-popup__actions">
          <Button
            label="Accept all"
            variant="primary"
            onClick={() => savePreferences({ necessary: true, analytics: true, marketing: true })}
          />
          <Button
            label="Reject optional"
            variant="secondary"
            onClick={() => savePreferences(defaultPreferences)}
          />
          {customize ? (
            <Button label="Save preferences" variant="primary" onClick={() => savePreferences(preferences)} />
          ) : (
            <Button label="Customize" variant="secondary" onClick={() => setCustomize(true)} />
          )}
        </div>
      </div>
    </section>
  );
}

export { STORAGE_KEY };
