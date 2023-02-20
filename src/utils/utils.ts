export function formatBoolean(value: boolean): string {
  return value ? 'Si' : 'No';
}

export function checkPageFilter(page?: number): number {
  if (page === undefined || page === null || page.toString() === '') {
    return 1;
  }

  return page + 1;
}

export function formCheckInvalidNumber(value: any): boolean {
  if (value === undefined || value === null || value === '') {
    return true;
  }

  return false;
}
