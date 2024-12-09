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

-- CreateTable
CREATE TABLE "countries" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50),

    CONSTRAINT "countries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "groupings" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "type" VARCHAR(10) NOT NULL,

    CONSTRAINT "groupings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "members" (
    "id" SERIAL NOT NULL,
    "first_name" VARCHAR(50) NOT NULL,
    "last_name" VARCHAR(50) NOT NULL,
    "first_name_jap" VARCHAR(50),
    "last_name_jap" VARCHAR(50),
    "first_name_kor" VARCHAR(50),
    "last_name_kor" VARCHAR(50),
    "first_name_ch" VARCHAR(50),
    "last_name_ch" VARCHAR(50),
    "date_of_birth" DATE,
    "country_id" INTEGER,

    CONSTRAINT "members_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "members_groupings" (
    "member_id" INTEGER NOT NULL,
    "grouping_id" INTEGER NOT NULL,

    CONSTRAINT "members_groupings_pkey" PRIMARY KEY ("member_id","grouping_id")
);

-- CreateTable
CREATE TABLE "release_formats" (
    "id" SERIAL NOT NULL,
    "format" VARCHAR(50),

    CONSTRAINT "release_formats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "release_groups" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "grouping_id" INTEGER NOT NULL,
    "type_id" INTEGER,

    CONSTRAINT "release_groups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "release_groups_types" (
    "id" SERIAL NOT NULL,
    "type" VARCHAR(50) NOT NULL,

    CONSTRAINT "release_groups_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "releases" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(50),
    "release_year" INTEGER,
    "format_id" INTEGER,
    "country_id" INTEGER,
    "release_group_id" INTEGER NOT NULL,
    "annotation" VARCHAR(50),

    CONSTRAINT "releases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "releases_tracks" (
    "release_id" INTEGER NOT NULL,
    "track_id" INTEGER NOT NULL,
    "track_num" INTEGER NOT NULL,

    CONSTRAINT "releases_tracks_pkey" PRIMARY KEY ("release_id","track_id")
);

-- CreateTable
CREATE TABLE "tracks" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "title_kor" VARCHAR(50),
    "title_jap" VARCHAR(50),
    "featuring" VARCHAR(50),

    CONSTRAINT "tracks_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "members" ADD CONSTRAINT "fk_country" FOREIGN KEY ("country_id") REFERENCES "countries"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "members_groupings" ADD CONSTRAINT "fk_member" FOREIGN KEY ("member_id") REFERENCES "members"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "members_groupings" ADD CONSTRAINT "fk_members_groupings_groupings" FOREIGN KEY ("grouping_id") REFERENCES "groupings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "release_groups" ADD CONSTRAINT "fk_type" FOREIGN KEY ("type_id") REFERENCES "release_groups_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "release_groups" ADD CONSTRAINT "fk_unit" FOREIGN KEY ("grouping_id") REFERENCES "groupings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "releases" ADD CONSTRAINT "fk_country" FOREIGN KEY ("country_id") REFERENCES "countries"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "releases" ADD CONSTRAINT "fk_format" FOREIGN KEY ("format_id") REFERENCES "release_formats"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "releases" ADD CONSTRAINT "fk_release_group" FOREIGN KEY ("release_group_id") REFERENCES "release_groups"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "releases_tracks" ADD CONSTRAINT "fk_release_tracks_tracks" FOREIGN KEY ("track_id") REFERENCES "tracks"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "releases_tracks" ADD CONSTRAINT "fk_releases_tracks_releases" FOREIGN KEY ("release_id") REFERENCES "releases"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

