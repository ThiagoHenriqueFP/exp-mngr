import cron from 'node-cron'
import { updatePaidPyamentsUseCase } from '../modules/paymetns/useCases/updatePaidPayments';

export const cronTask = cron.schedule('* * 30 * *', () => {
  updatePaidPyamentsUseCase.execute(new Date('10-01-2023'));
});
