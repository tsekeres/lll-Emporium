DROP TABLE IF EXISTS dbo.Categories

CREATE TABLE dbo.Categories
(
	Id uniqueidentifier NOT NULL Primary Key default(newid()),
	CategoryName VARCHAR(50) NOT NULL,
	CategoryImageUrl VARCHAR(100) NULL
)

DROP TABLE IF EXISTS dbo.ProducType

CREATE TABLE dbo.ProductType
(
	Id UNIQUEIDENTIFIER NOT NULL Primary Key default(newid()),
	CategoryId GUID
	