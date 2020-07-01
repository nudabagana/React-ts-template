import { event } from 'react-ga';

export const click = (category: string, label: string) =>
  event({ action: 'click', category, label });
export const submit = (category: string, label: string) =>
  event({ action: 'submit', category, label });
export const alert = (category: string, label: string) =>
  event({ action: 'alert', category, label });

