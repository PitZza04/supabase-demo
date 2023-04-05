/*
  Warnings:

  - You are about to drop the `Address` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Barangay` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Brand` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `City` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Driver_license` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Model` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Province` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Region` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Services_category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Services_type` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User_profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Vehicle` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_brgy_id_fkey";

-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_city_id_fkey";

-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_province_id_fkey";

-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_region_id_fkey";

-- DropForeignKey
ALTER TABLE "Barangay" DROP CONSTRAINT "Barangay_city_id_fkey";

-- DropForeignKey
ALTER TABLE "City" DROP CONSTRAINT "City_province_id_fkey";

-- DropForeignKey
ALTER TABLE "Model" DROP CONSTRAINT "Model_brand_id_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_services_category_id_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_services_type_id_fkey";

-- DropForeignKey
ALTER TABLE "Province" DROP CONSTRAINT "Province_region_id_fkey";

-- DropForeignKey
ALTER TABLE "Services_category" DROP CONSTRAINT "Services_category_services_type_id_fkey";

-- DropForeignKey
ALTER TABLE "User_profile" DROP CONSTRAINT "User_profile_address_id_fkey";

-- DropForeignKey
ALTER TABLE "User_profile" DROP CONSTRAINT "User_profile_driver_license_id_fkey";

-- DropForeignKey
ALTER TABLE "Vehicle" DROP CONSTRAINT "Vehicle_brand_id_fkey";

-- DropForeignKey
ALTER TABLE "Vehicle" DROP CONSTRAINT "Vehicle_model_id_fkey";

-- DropForeignKey
ALTER TABLE "Vehicle" DROP CONSTRAINT "Vehicle_user_id_fkey";

-- DropTable
DROP TABLE "Address";

-- DropTable
DROP TABLE "Barangay";

-- DropTable
DROP TABLE "Brand";

-- DropTable
DROP TABLE "City";

-- DropTable
DROP TABLE "Driver_license";

-- DropTable
DROP TABLE "Model";

-- DropTable
DROP TABLE "Product";

-- DropTable
DROP TABLE "Province";

-- DropTable
DROP TABLE "Region";

-- DropTable
DROP TABLE "Services_category";

-- DropTable
DROP TABLE "Services_type";

-- DropTable
DROP TABLE "User_profile";

-- DropTable
DROP TABLE "Vehicle";

-- CreateTable
CREATE TABLE "address" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "province_id" INTEGER NOT NULL,
    "city_id" INTEGER NOT NULL,
    "brgy_id" INTEGER NOT NULL,
    "updated_at" TIMESTAMPTZ(6),
    "street_address" TEXT NOT NULL,
    "region_id" INTEGER NOT NULL,

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "barangay" (
    "id" SERIAL NOT NULL,
    "brgy_name" TEXT NOT NULL,
    "city_id" INTEGER NOT NULL,

    CONSTRAINT "barangay_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "brand" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "img_url" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),

    CONSTRAINT "brand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "city" (
    "id" SERIAL NOT NULL,
    "city_name" TEXT NOT NULL,
    "province_id" INTEGER NOT NULL,

    CONSTRAINT "city_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "driver_license" (
    "id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "license_no" TEXT NOT NULL,
    "date_expiration" DATE,
    "driver_img_url" TEXT,
    "updated_at" TIMESTAMPTZ(6),

    CONSTRAINT "driver_license_id_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "model" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),
    "name" TEXT NOT NULL,
    "img_url" TEXT,
    "brand_id" BIGINT NOT NULL,

    CONSTRAINT "model_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product" (
    "id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "product_name" TEXT NOT NULL,
    "price" DECIMAL,
    "product_metadata" JSONB,
    "shop_id" UUID NOT NULL,
    "updated_at" TIMESTAMPTZ(6),
    "published" BOOLEAN NOT NULL,
    "services_category_id" UUID NOT NULL,
    "services_type_id" UUID NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "province" (
    "id" SERIAL NOT NULL,
    "province_name" TEXT,
    "region_id" INTEGER NOT NULL,

    CONSTRAINT "province_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "region" (
    "id" SERIAL NOT NULL,
    "region_name" TEXT NOT NULL,
    "region_code" TEXT NOT NULL,

    CONSTRAINT "region_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "services_category" (
    "id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),
    "services_type_id" UUID NOT NULL,
    "category_name" TEXT NOT NULL,

    CONSTRAINT "services_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "services_type" (
    "id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),
    "type_name" TEXT NOT NULL,

    CONSTRAINT "services_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_profile" (
    "id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),
    "metadata" JSONB DEFAULT '{"birth": "", "fname": "", "lname": "", "mname": "", "gender": ""}',
    "avatar_url" TEXT,
    "address_id" INTEGER NOT NULL,
    "driver_license_id" UUID,
    "gender" "gender",
    "email" TEXT,

    CONSTRAINT "profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vehicle" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "plate_no" TEXT,
    "engine_no" TEXT,
    "fuel_type" TEXT NOT NULL,
    "chassis_no" TEXT,
    "user_id" UUID NOT NULL,
    "brand_id" BIGINT NOT NULL,
    "model_id" BIGINT NOT NULL,
    "updated_at" TIMESTAMPTZ(6),

    CONSTRAINT "vehicle_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_profile_email_key" ON "user_profile"("email");

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_brgy_id_fkey" FOREIGN KEY ("brgy_id") REFERENCES "barangay"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "city"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_province_id_fkey" FOREIGN KEY ("province_id") REFERENCES "province"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_region_id_fkey" FOREIGN KEY ("region_id") REFERENCES "region"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "barangay" ADD CONSTRAINT "barangay_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "city"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "city" ADD CONSTRAINT "city_province_id_fkey" FOREIGN KEY ("province_id") REFERENCES "province"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "model" ADD CONSTRAINT "model_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "brand"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_services_category_id_fkey" FOREIGN KEY ("services_category_id") REFERENCES "services_category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_services_type_id_fkey" FOREIGN KEY ("services_type_id") REFERENCES "services_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "province" ADD CONSTRAINT "province_region_id_fkey" FOREIGN KEY ("region_id") REFERENCES "region"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "services_category" ADD CONSTRAINT "services_category_services_type_id_fkey" FOREIGN KEY ("services_type_id") REFERENCES "services_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_profile" ADD CONSTRAINT "user_profile_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_profile" ADD CONSTRAINT "user_profile_driver_license_id_fkey" FOREIGN KEY ("driver_license_id") REFERENCES "driver_license"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "vehicle" ADD CONSTRAINT "vehicle_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "brand"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "vehicle" ADD CONSTRAINT "vehicle_model_id_fkey" FOREIGN KEY ("model_id") REFERENCES "model"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "vehicle" ADD CONSTRAINT "vehicle_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
