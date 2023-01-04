/*
  Warnings:

  - You are about to drop the column `debtId` on the `Payments` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Payments" DROP CONSTRAINT "Payments_debtId_fkey";

-- AlterTable
ALTER TABLE "Payments" DROP COLUMN "debtId";

-- CreateTable
CREATE TABLE "DebtsOnPayments" (
    "userId" INTEGER NOT NULL,
    "debtId" INTEGER NOT NULL,
    "paymentId" INTEGER NOT NULL,

    CONSTRAINT "DebtsOnPayments_pkey" PRIMARY KEY ("userId","debtId","paymentId")
);

-- CreateTable
CREATE TABLE "_DebtToPayments" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_DebtToPayments_AB_unique" ON "_DebtToPayments"("A", "B");

-- CreateIndex
CREATE INDEX "_DebtToPayments_B_index" ON "_DebtToPayments"("B");

-- AddForeignKey
ALTER TABLE "DebtsOnPayments" ADD CONSTRAINT "DebtsOnPayments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DebtsOnPayments" ADD CONSTRAINT "DebtsOnPayments_debtId_fkey" FOREIGN KEY ("debtId") REFERENCES "Debt"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DebtsOnPayments" ADD CONSTRAINT "DebtsOnPayments_paymentId_fkey" FOREIGN KEY ("paymentId") REFERENCES "Payments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DebtToPayments" ADD CONSTRAINT "_DebtToPayments_A_fkey" FOREIGN KEY ("A") REFERENCES "Debt"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DebtToPayments" ADD CONSTRAINT "_DebtToPayments_B_fkey" FOREIGN KEY ("B") REFERENCES "Payments"("id") ON DELETE CASCADE ON UPDATE CASCADE;
