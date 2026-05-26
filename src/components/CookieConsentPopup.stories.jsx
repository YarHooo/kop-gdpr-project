import { CookieConsentPopup } from './CookieConsentPopup';

export default {
  title: 'Components/CookieConsentPopup',
  component: CookieConsentPopup,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    projectName: { control: 'text' },
    forceVisible: { control: 'boolean' },
  },
};

export const DefaultPopup = {
  args: {
    projectName: 'KOP GDPR Project',
    forceVisible: true,
  },
};

export const ShopProject = {
  args: {
    projectName: 'Demo Online Shop',
    forceVisible: true,
  },
};

export const DocumentationPortal = {
  args: {
    projectName: 'Local Documentation Portal',
    forceVisible: true,
  },
};
