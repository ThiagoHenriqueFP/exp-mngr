/*
  Warnings:

  - You are about to drop the column `finalized` on the `Debt` table. All the data in the column will be lost.
  - You are about to drop the `_DebtToPayments` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_DebtToPayments" DROP CONSTRAINT "_DebtToPayments_A_fkey";

-- DropForeignKey
ALTER TABLE "_DebtToPayments" DROP CONSTRAINT "_DebtToPayments_B_fkey";

-- AlterTable
ALTER TABLE "Debt" DROP COLUMN "finalized";

-- DropTable
DROP TABLE "_DebtToPayments";
