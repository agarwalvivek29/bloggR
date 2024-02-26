/*
  Warnings:

  - You are about to drop the column `auhtor` on the `Blog` table. All the data in the column will be lost.
  - Added the required column `author` to the `Blog` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Blog" DROP CONSTRAINT "Blog_auhtor_fkey";

-- AlterTable
ALTER TABLE "Blog" DROP COLUMN "auhtor",
ADD COLUMN     "author" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Blog" ADD CONSTRAINT "Blog_author_fkey" FOREIGN KEY ("author") REFERENCES "User"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
