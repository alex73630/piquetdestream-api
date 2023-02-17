-- CreateTable
CREATE TABLE "StreamDate" (
    "id" SERIAL NOT NULL,
    "streamer" TEXT NOT NULL,
    "streamHour" BIGINT NOT NULL,

    CONSTRAINT "StreamDate_pkey" PRIMARY KEY ("id")
);
