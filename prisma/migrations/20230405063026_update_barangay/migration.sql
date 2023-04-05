/*
  Warnings:

  - You are about to drop the column `brgy_name` on the `barangay` table. All the data in the column will be lost.
  - Added the required column `barangay_name` to the `barangay` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "barangay" DROP COLUMN "brgy_name",
ADD COLUMN     "barangay_name" TEXT NOT NULL;
