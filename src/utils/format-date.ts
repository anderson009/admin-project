import dayjs from 'dayjs/esm/index.js';

export function formatDateHumanize(date: string): string {
  return dayjs(date).format('DD/MM/YYYY hh:mm');
}
