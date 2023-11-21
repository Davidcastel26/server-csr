-- CreateTable
CREATE TABLE "users" (
    "idUser" TEXT NOT NULL,
    "cxId" TEXT NOT NULL,
    "userName" VARCHAR(25) NOT NULL,
    "email" VARCHAR(45) NOT NULL,
    "password" VARCHAR(75) NOT NULL,
    "img" TEXT,
    "google" BOOLEAN NOT NULL DEFAULT false,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "roleId" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("idUser","cxId")
);

-- CreateTable
CREATE TABLE "roles" (
    "idRole" TEXT NOT NULL,
    "roleName" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("idRole")
);

-- CreateTable
CREATE TABLE "products" (
    "idProduct" TEXT NOT NULL,
    "nameProduct" TEXT NOT NULL,
    "numProduct" INTEGER NOT NULL DEFAULT 0,
    "desc" VARCHAR(180) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "imgMainProduct" TEXT,

    CONSTRAINT "products_pkey" PRIMARY KEY ("idProduct")
);

-- CreateTable
CREATE TABLE "imgs" (
    "idImg" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "img" VARCHAR(255) NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "imgs_pkey" PRIMARY KEY ("idImg")
);

-- CreateTable
CREATE TABLE "productdetail" (
    "idProductDetail" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "price" INTEGER NOT NULL DEFAULT 0,
    "fullDesc" TEXT NOT NULL,
    "numGuest" INTEGER NOT NULL DEFAULT 0,
    "beds" INTEGER NOT NULL DEFAULT 0,
    "rooms" INTEGER NOT NULL DEFAULT 0,
    "bath" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "productdetail_pkey" PRIMARY KEY ("idProductDetail")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_idUser_key" ON "users"("idUser");

-- CreateIndex
CREATE UNIQUE INDEX "users_cxId_key" ON "users"("cxId");

-- CreateIndex
CREATE UNIQUE INDEX "users_userName_key" ON "users"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_roleId_idx" ON "users"("roleId");

-- CreateIndex
CREATE UNIQUE INDEX "roles_idRole_key" ON "roles"("idRole");

-- CreateIndex
CREATE UNIQUE INDEX "roles_roleName_key" ON "roles"("roleName");

-- CreateIndex
CREATE UNIQUE INDEX "products_idProduct_key" ON "products"("idProduct");

-- CreateIndex
CREATE UNIQUE INDEX "products_nameProduct_key" ON "products"("nameProduct");

-- CreateIndex
CREATE UNIQUE INDEX "imgs_idImg_key" ON "imgs"("idImg");

-- CreateIndex
CREATE INDEX "imgs_productId_idx" ON "imgs"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "productdetail_idProductDetail_key" ON "productdetail"("idProductDetail");

-- CreateIndex
CREATE INDEX "productdetail_productId_idx" ON "productdetail"("productId");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "roles"("idRole") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "imgs" ADD CONSTRAINT "imgs_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("idProduct") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productdetail" ADD CONSTRAINT "productdetail_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("idProduct") ON DELETE RESTRICT ON UPDATE CASCADE;
