-- CreateEnum
CREATE TYPE "gender" AS ENUM ('Male', 'Female');

-- CreateEnum
CREATE TYPE "status" AS ENUM ('active', 'inactive', 'deleted');

-- CreateTable
CREATE TABLE "Address" (
    "id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "street_address_1" TEXT NOT NULL,
    "street_address_2" TEXT NOT NULL,
    "region_id" UUID NOT NULL,
    "province_id" UUID NOT NULL,
    "city_id" UUID NOT NULL,
    "brgy_id" UUID NOT NULL,
    "updated_at" TIMESTAMPTZ(6),

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Barangay" (
    "id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),
    "city_id" UUID NOT NULL,

    CONSTRAINT "Barangay_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Brand" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "img_url" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "City" (
    "id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),
    "city_name" TEXT NOT NULL,
    "province_id" UUID NOT NULL,

    CONSTRAINT "City_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Driver_license" (
    "id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "license_no" TEXT NOT NULL,
    "date_expiration" DATE,
    "driver_img_url" TEXT,
    "updated_at" TIMESTAMPTZ(6),

    CONSTRAINT "driver_license_id_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Model" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),
    "name" TEXT NOT NULL,
    "img_url" TEXT,
    "brand_id" BIGINT NOT NULL,

    CONSTRAINT "Model_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
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

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Province" (
    "id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "province_name" TEXT,
    "updated_at" TIMESTAMPTZ(6),
    "region_id" UUID NOT NULL,

    CONSTRAINT "Province_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Region" (
    "id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),
    "region_name" TEXT NOT NULL,

    CONSTRAINT "Region_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Services_category" (
    "id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),
    "services_type_id" UUID NOT NULL,
    "category_name" TEXT NOT NULL,

    CONSTRAINT "Services_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Services_type" (
    "id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),
    "type_name" TEXT NOT NULL,

    CONSTRAINT "Services_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User_profile" (
    "id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),
    "metadata" JSONB DEFAULT '{"birth": "", "fname": "", "lname": "", "mname": "", "gender": ""}',
    "avatar_url" TEXT,
    "address_id" UUID NOT NULL,
    "driver_license_id" UUID NOT NULL,
    "gender" "gender",

    CONSTRAINT "profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vehicle" (
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

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Region_id_key" ON "Region"("id");

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_brgy_id_fkey" FOREIGN KEY ("brgy_id") REFERENCES "Barangay"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "City"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_province_id_fkey" FOREIGN KEY ("province_id") REFERENCES "Province"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_region_id_fkey" FOREIGN KEY ("region_id") REFERENCES "Region"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Barangay" ADD CONSTRAINT "Barangay_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "City"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "City" ADD CONSTRAINT "City_province_id_fkey" FOREIGN KEY ("province_id") REFERENCES "Province"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Model" ADD CONSTRAINT "Model_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "Brand"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_services_category_id_fkey" FOREIGN KEY ("services_category_id") REFERENCES "Services_category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_services_type_id_fkey" FOREIGN KEY ("services_type_id") REFERENCES "Services_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Province" ADD CONSTRAINT "Province_region_id_fkey" FOREIGN KEY ("region_id") REFERENCES "Region"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Services_category" ADD CONSTRAINT "Services_category_services_type_id_fkey" FOREIGN KEY ("services_type_id") REFERENCES "Services_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "User_profile" ADD CONSTRAINT "User_profile_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "Address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "User_profile" ADD CONSTRAINT "User_profile_driver_license_id_fkey" FOREIGN KEY ("driver_license_id") REFERENCES "Driver_license"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Vehicle" ADD CONSTRAINT "Vehicle_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "Brand"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Vehicle" ADD CONSTRAINT "Vehicle_model_id_fkey" FOREIGN KEY ("model_id") REFERENCES "Model"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Vehicle" ADD CONSTRAINT "Vehicle_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User_profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
