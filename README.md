# KOP GDPR Project

## Documentation

- [Privacy Policy](./PRIVACY_POLICY.md)
- [License](./LICENSE)

## Автор

- **Ярослав Горкун**

## Технології

- React
- Vite
- Storybook
- JSDoc
- license-checker

## Встановлення

```bash
npm install
```

## Базові команди

Запуск сайту локально:

```bash
npm run dev
```

Збірка проєкту:

```bash
npm run build
```

Перегляд production-збірки:

```bash
npm run preview
```

Запуск Storybook:

```bash
npm run storybook
```

Генерація локальної документації:

```bash
npm run docs
```

Генерація звіту ліцензій залежностей:

```bash
npm run license-report
```

## GDPR Cookie Popup

У проєкті реалізовано cookie popup з трьома сценаріями:

- **Accept all** — користувач дозволяє Necessary, Analytics та Marketing cookies.
- **Reject optional** — залишаються тільки необхідні cookies.
- **Customize** — користувач самостійно обирає категорії Analytics та Marketing.

Вибір користувача зберігається в `localStorage` під ключем:

```txt
kop_gdpr_cookie_preferences
```

Категорії cookies:

| Категорія | Опис | Обовʼязкова |
|---|---|---|
| Necessary | Потрібна для базової роботи сайту | Так |
| Analytics | Для аналізу використання сайту | Ні |
| Marketing | Для персоналізованого контенту | Ні |

## Storybook

У Storybook описано 2 компоненти:

1. **Button** — базовий компонент.
   - Primary
   - Secondary
   - Disabled

2. **CookieConsentPopup** — комплексний компонент.
   - DefaultPopup
   - ShopProject
   - DocumentationPortal

Властивості компонентів можна змінювати через Controls.

## Документація

Документація генерується через JSDoc у папку `docs/` командою:

```bash
npm run docs
```

Якщо документація не викладена на сервер, потрібно додати відео демонстрації локального запуску документації.

## Ліцензія

Проєкт використовує ліцензію **MIT**. Повний текст ліцензії знаходиться у файлі [LICENSE](./LICENSE).

Звіт перевірки ліцензій залежностей знаходиться у файлі [license-report.md](./license-report.md).

## Privacy Policy

Політика приватності та опис використання cookies знаходиться у файлі [PRIVACY_POLICY.md](./PRIVACY_POLICY.md).
