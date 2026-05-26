import { CookieConsentPopup } from './components/CookieConsentPopup';
import './App.css';

function App() {
  return (
    <main className="page-shell">
      <section className="hero-card">
        <p className="hero-card__label">KOP Project</p>
        <h1>GDPR Cookie Consent Demo</h1>
        <p>
          Навчальний React-проєкт для предмету КОП. Він демонструє базову сторінку,
          GDPR cookie popup, локальну документацію, Storybook-компоненти, ліцензію та політику приватності.
        </p>
        <div className="hero-card__grid">
          <article>
            <h2>GDPR</h2>
            <p>Користувач може прийняти, відхилити або налаштувати категорії cookies.</p>
          </article>
          <article>
            <h2>Storybook</h2>
            <p>Описано базовий компонент Button та комплексний CookieConsentPopup.</p>
          </article>
          <article>
            <h2>Docs</h2>
            <p>Документація генерується через JSDoc у локальну папку docs.</p>
          </article>
        </div>
      </section>
      <CookieConsentPopup projectName="KOP GDPR Project" />
    </main>
  );
}

export default App;
