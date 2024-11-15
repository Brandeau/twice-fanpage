-- CreateTable
CREATE TABLE "Member" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "first_name_jap" TEXT NOT NULL,
    "last_name_jap" TEXT NOT NULL,
    "first_name_kor" TEXT NOT NULL,
    "last_name_kor" TEXT NOT NULL,
    "first_name_ch" TEXT NOT NULL,
    "last_name_ch" TEXT NOT NULL,
    "date_of_birth" INTEGER NOT NULL,
    "country_id" INTEGER NOT NULL,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);
