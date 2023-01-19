-- CreateTable
CREATE TABLE "Donation" (
    "id" SERIAL NOT NULL,
    "amount" INTEGER NOT NULL,
    "createdAt" BIGINT NOT NULL,
    "name" TEXT,
    "message" TEXT,

    CONSTRAINT "Donation_pkey" PRIMARY KEY ("id")
);
