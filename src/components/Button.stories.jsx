import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    variant: { control: 'select', options: ['primary', 'secondary', 'danger'] },
    disabled: { control: 'boolean' },
  },
};

export const Primary = {
  args: {
    label: 'Accept all',
    variant: 'primary',
    disabled: false,
  },
};

export const Secondary = {
  args: {
    label: 'Customize',
    variant: 'secondary',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    label: 'Disabled button',
    variant: 'primary',
    disabled: true,
  },
};
