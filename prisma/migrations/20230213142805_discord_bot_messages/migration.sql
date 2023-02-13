-- CreateTable
CREATE TABLE "DiscordBotMessages" (
    "id" SERIAL NOT NULL,
    "createdAt" BIGINT NOT NULL,
    "name" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "DiscordBotMessages_pkey" PRIMARY KEY ("id")
);
