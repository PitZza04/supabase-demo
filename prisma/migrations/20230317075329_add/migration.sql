/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `User_profile` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `User_profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User_profile" ADD COLUMN     "email" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_profile_email_key" ON "User_profile"("email");
