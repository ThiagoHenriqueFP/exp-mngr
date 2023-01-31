-- DropForeignKey
ALTER TABLE "DebtsOnPayments" DROP CONSTRAINT "DebtsOnPayments_debtId_fkey";

-- DropForeignKey
ALTER TABLE "DebtsOnPayments" DROP CONSTRAINT "DebtsOnPayments_paymentId_fkey";

-- DropForeignKey
ALTER TABLE "DebtsOnPayments" DROP CONSTRAINT "DebtsOnPayments_userId_fkey";

-- AddForeignKey
ALTER TABLE "DebtsOnPayments" ADD CONSTRAINT "DebtsOnPayments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DebtsOnPayments" ADD CONSTRAINT "DebtsOnPayments_debtId_fkey" FOREIGN KEY ("debtId") REFERENCES "Debt"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DebtsOnPayments" ADD CONSTRAINT "DebtsOnPayments_paymentId_fkey" FOREIGN KEY ("paymentId") REFERENCES "Payments"("id") ON DELETE CASCADE ON UPDATE CASCADE;
