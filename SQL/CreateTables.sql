DROP TABLE IF EXISTS dbo.Categories

CREATE TABLE dbo.Categories
(
	Id uniqueidentifier NOT NULL Primary Key default(newid()),
	CategoryName varchar(50) NOT NULL,
	CategoryImageUrl varchar(500) NULL
)

DROP TABLE IF EXISTS dbo.ProducType

CREATE TABLE dbo.ProductTypes
(
	Id uniqueidentifier NOT NULL Primary Key default(newid()),
	CategoryId uniqueidentifier NOT NULL,
	TypeName varchar(50),
	ProductTypeImageURL varchar(500) NULL,
	CONSTRAINT FK_ProductTypes_CategoryId FOREIGN KEY (CategoryId)
		REFERENCES dbo.Categories (Id)
)

DROP TABLE IF EXISTS dbo.Users

CREATE TABLE Users
(
	Id uniqueidentifier NOT NULL Primary Key default(newid()),
	FirstName varchar(50),
	LastName varchar(50),
	EmailAddress varchar(50),
	IsDesigner integer default 0,
	Bio varchar(500)
)

DROP TABLE IF EXISTS dbo.Products

CREATE TABLE dbo.Products
(
	Id uniqueidentifier NOT NULL Primary Key default(newid()),
	ProductTypeId uniqueidentifier NOT NULL,
	DesignerId uniqueidentifier NOT NULL,
	ProductName varchar(100) NOT NULL,
	ProductDescription varchar(500) NULL,
	ProductImageURL varchar(500) NULL,
	Price decimal NOT NULL,
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
	PaymentTypeId uniqueidentifier,
	PaymentAccount varchar(50),
	OrderTotal decimal,
	ShippingAddress varchar(50),
	ShippingCity varchar(50),
	ShippingState varchar(2),
	ShippingZip varchar(10),
	ShippingCost decimal,
	OrderDate datetime,
	Completed bit default 0
	CONSTRAINT FK_Orders_Customers FOREIGN KEY (CustomerId)
		REFERENCES dbo.Users (Id),
	CONSTRAINT FK_Orders_PaymentTypes FOREIGN KEY (PaymentTypeId)
		REFERENCES dbo.PaymentTypes (Id)
)

DROP TABLE IF EXISTS OrderLines

CREATE TABLE OrderLines
(
	Id uniqueidentifier NOT NULL Primary Key default(newid()),
	OrderId uniqueidentifier NOT NULL,
	ProductId uniqueidentifier NOT NULL,
	UnitPrice decimal,
	Quantity integer,
	Discount decimal
	CONSTRAINT FK_OrderLines_Orders FOREIGN KEY (OrderId)
		REFERENCES dbo.Orders (Id),
	CONSTRAINT FK_OrderLines_Products FOREIGN KEY (ProductId)
		REFERENCES dbo.Products (Id)
)





	
	