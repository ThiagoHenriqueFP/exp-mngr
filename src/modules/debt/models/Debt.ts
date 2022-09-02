import { v4 as uuidV4 } from 'uuid';

class Debt {
  id?: string;

  user_id:string;

  value: number;

  startDate?: Date;

  endDate: Date;

  parts?: number;

  constructor() {
    if (this.id === null) {
      this.id = uuidV4();
    }

    this.startDate = new Date();

    // eslint-disable-next-line max-len
    if (this.startDate.getMonth() <= this.endDate.getMonth() && (this.startDate.getFullYear() <= this.endDate.getFullYear())) {
      const month = this.startDate.getFullYear() - this.endDate.getFullYear();
      if (!month) {
        this.parts = (this.endDate.getMonth() + 12 * month) - this.startDate.getMonth();
      }
    } else {
      throw new Error('Invalid Date');
    }
  }
}

export { Debt };
