IF EXISTS (SELECT * FROM Information_schema.TABLES WHERE TABLE_NAME = 'OrderLines') DELETE from OrderLines;
IF EXISTS (SELECT * FROM Information_schema.TABLES WHERE TABLE_NAME = 'Orders') DELETE from Orders;
IF EXISTS (SELECT * FROM Information_schema.TABLES WHERE TABLE_NAME = 'Transactions') DELETE from Transactions;
IF EXISTS (SELECT * FROM Information_schema.TABLES WHERE TABLE_NAME = 'TransactionTypes') DELETE from TransactionTypes;
IF EXISTS (SELECT * FROM Information_schema.TABLES WHERE TABLE_NAME = 'PaymentTypes') DELETE from PaymentTypes;
IF EXISTS (SELECT * FROM Information_schema.TABLES WHERE TABLE_NAME = 'Products') DELETE from Products;
IF EXISTS (SELECT * FROM Information_schema.TABLES WHERE TABLE_NAME = 'Users') DELETE from Users;
IF EXISTS (SELECT * FROM Information_schema.TABLES WHERE TABLE_NAME = 'RoleTypes') DELETE from RoleTypes;
IF EXISTS (SELECT * FROM Information_schema.TABLES WHERE TABLE_NAME = 'ProductTypes') DELETE from ProductTypes;
IF EXISTS (SELECT * FROM Information_schema.TABLES WHERE TABLE_NAME = 'Categories') DELETE from Categories;

IF EXISTS (SELECT * FROM Information_schema.TABLES WHERE TABLE_NAME = 'Transactions')
ALTER TABLE dbo.Transactions 
DROP CONSTRAINT FK_Transactions_TransactionTypes;

IF EXISTS (SELECT * FROM Information_schema.TABLES WHERE TABLE_NAME = 'Transactions')
ALTER TABLE dbo.Transactions 
DROP CONSTRAINT FK_Transactions_PaymentTypes;

IF EXISTS (SELECT * FROM Information_schema.TABLES WHERE TABLE_NAME = 'Transactions')
ALTER TABLE dbo.Transactions 
DROP CONSTRAINT FK_Transactions_Orders;

IF EXISTS (SELECT * FROM Information_schema.TABLES WHERE TABLE_NAME = 'OrderLines')
ALTER TABLE dbo.OrderLines
DROP CONSTRAINT FK_OrderLines_Products;

IF EXISTS (SELECT * FROM Information_schema.TABLES WHERE TABLE_NAME = 'OrderLines')
ALTER TABLE dbo.OrderLines
DROP CONSTRAINT FK_OrderLines_Orders;

IF EXISTS (SELECT * FROM Information_schema.TABLES WHERE TABLE_NAME = 'Orders')
ALTER TABLE dbo.Orders
DROP CONSTRAINT FK_Orders_Customers;

IF EXISTS (SELECT * FROM Information_schema.TABLES WHERE TABLE_NAME = 'Products')
ALTER TABLE dbo.Products
DROP CONSTRAINT FK_Products_ProductTypes;

IF EXISTS (SELECT * FROM Information_schema.TABLES WHERE TABLE_NAME = 'Products')
ALTER TABLE dbo.Products
DROP CONSTRAINT FK_Products_Users;

IF EXISTS (SELECT * FROM Information_schema.TABLES WHERE TABLE_NAME = 'Users')
ALTER TABLE dbo.Users
DROP CONSTRAINT FK_Users_RoleTypes;

IF EXISTS (SELECT * FROM Information_schema.TABLES WHERE TABLE_NAME = 'PaymentTypes')
ALTER TABLE dbo.ProductTypes
DROP CONSTRAINT FK_ProductTypes_CategoryId

DROP TABLE IF EXISTS dbo.Categories

CREATE TABLE dbo.Categories
(
	Id uniqueidentifier NOT NULL Primary Key default(newid()),
	CategoryName varchar(50) NOT NULL,
	CategoryImageUrl varchar(800) NULL
)

DROP TABLE IF EXISTS dbo.ProductTypes;

CREATE TABLE dbo.ProductTypes
(
	Id uniqueidentifier NOT NULL Primary Key default(newid()),
	CategoryId uniqueidentifier NOT NULL,
	TypeName varchar(50),
	ProductTypeImageURL varchar(800) NULL,
	CONSTRAINT FK_ProductTypes_CategoryId FOREIGN KEY (CategoryId)
		REFERENCES dbo.Categories (Id)
)

DROP TABLE IF Exists dbo.RoleTypes

CREATE TABLE RoleTypes
(
	Id uniqueidentifier NOT NULL Primary Key default(newid()),
	RoleTypeName varchar(50)
)

DROP TABLE IF EXISTS dbo.Users

CREATE TABLE Users
(
	Id uniqueidentifier NOT NULL Primary Key default(newid()),
	RoleTypeId uniqueidentifier NOT NULL,
	DisplayName varchar(100) NOT NULL,
	FirstName varchar(50),
	LastName varchar(50),
	EmailAddress varchar(100) NOT NULL,
	ProfilePicURL varchar(800) NOT NULL,
	Bio varchar(1000),
	CONSTRAINT FK_Users_RoleTypes FOREIGN KEY (RoleTypeId)
		REFERENCES dbo.RoleTypes (Id)
)

DROP TABLE IF EXISTS dbo.Products

CREATE TABLE dbo.Products
(
	Id uniqueidentifier NOT NULL Primary Key default(newid()),
	ProductTypeId uniqueidentifier NOT NULL,
	DesignerId uniqueidentifier NOT NULL,
	ProductName varchar(100) NOT NULL,
	ProductDescription varchar(500) NULL,
	ProductImageURL varchar(800) NULL,
	Price decimal(12,2),
	InventoryCount integer,
	CONSTRAINT FK_Products_ProductTypes FOREIGN KEY (ProductTypeId)
		REFERENCES dbo.ProductTypes (Id),
	CONSTRAINT FK_Products_Users FOREIGN KEY (DesignerId)
		REFERENCES dbo.Users (Id)
)

DROP TABLE IF EXISTS PaymentTypes

CREATE TABLE PaymentTypes
(
	Id uniqueidentifier NOT NULL Primary Key default(newid()),
	PaymentTypeName varchar(50) NOT NULL
)

DROP TABLE IF EXISTS Orders

CREATE TABLE Orders
(
	Id uniqueidentifier NOT NULL Primary Key default(newid()),
	CustomerId uniqueidentifier NOT NULL,
	ShippingAddress varchar(50),
	ShippingCity varchar(50),
	ShippingState varchar(2),
	ShippingZip varchar(10),
	ShippingCost decimal(12,2),
	OrderDate datetime,
	Completed bit default 0
	CONSTRAINT FK_Orders_Customers FOREIGN KEY (CustomerId)
		REFERENCES dbo.Users (Id),
)

DROP TABLE IF EXISTS OrderLines

CREATE TABLE OrderLines
(
	Id uniqueidentifier NOT NULL Primary Key default(newid()),
	OrderId uniqueidentifier NOT NULL,
	ProductId uniqueidentifier NOT NULL,
	UnitPrice decimal(12,2),
	Quantity integer,
	Discount decimal(12,2),
	CONSTRAINT FK_OrderLines_Orders FOREIGN KEY (OrderId)
		REFERENCES dbo.Orders (Id),
	CONSTRAINT FK_OrderLines_Products FOREIGN KEY (ProductId)
		REFERENCES dbo.Products (Id)
)
DROP TABLE IF EXISTS TransactionTypes;

CREATE TABLE TransactionTypes
(
	Id uniqueidentifier NOT NULL Primary Key default(newid()),
	TransactionTypeName varchar(50)
)


DROP TABLE IF EXISTS Transactions

CREATE TABLE Transactions
(
	Id uniqueidentifier NOT NULL Primary Key default(newid()),
	OrderId uniqueidentifier NOT NULL,
	PaymentTypeId uniqueidentifier NOT NULL,
	TransactionTypeId uniqueidentifier NOT NULL,
	PaymentAccount varchar(100) NOT NULL,
	PaymentAmount decimal(12,2),
	PaymentDate datetime
	CONSTRAINT FK_Transactions_Orders FOREIGN KEY (OrderId)
		REFERENCES dbo.Orders (Id),
	CONSTRAINT FK_Transactions_PaymentTypes FOREIGN KEY (PaymentTypeId)
		REFERENCES dbo.PaymentTypes (Id),
	CONSTRAINT FK_Transactions_TransactionTypes FOREIGN KEY (TransactionTypeId)
		REFERENCES dbo.TransactionTypes (Id)
)

