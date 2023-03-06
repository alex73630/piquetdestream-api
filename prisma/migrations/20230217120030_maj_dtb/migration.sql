/*
  Warnings:

  - A unique constraint covering the columns `[streamer]` on the table `StreamDate` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "StreamDate" ALTER COLUMN "streamHour" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "StreamDate_streamer_key" ON "StreamDate"("streamer");
