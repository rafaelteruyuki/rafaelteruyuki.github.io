export class DateHelper {
  static monthAsString(month: number, format?: 'MMM' | 'MMMM'): string {
    const longMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const shortMonts = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    if (format === 'MMM') {
      return shortMonts[month];
    }

    return longMonths[month];
  }

  static dateFactory(stringDate: string): Date {
    return new Date(stringDate.split('/').reverse().join(','));
  }

  static formatPeriod(startDateString: string, endDateString: string, type: 'course' | 'job'): string {
    const startDate = this.dateFactory(startDateString);
    const strStartDate = `${DateHelper.monthAsString(startDate.getMonth())}/${startDate.getFullYear()}`;

    let endDate: Date;
    let strEndDate: string;

    if (endDateString) {
      endDate = DateHelper.dateFactory(endDateString);
      strEndDate = `${DateHelper.monthAsString(endDate.getMonth())}/${endDate.getFullYear()}`;
    } else {
      strEndDate = type === 'course' ? 'On progress' : 'Present';
    }

    return `${strStartDate} - ${strEndDate}`;
  }
}
