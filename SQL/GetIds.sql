Select Id, CategoryName from Categories;

Select Id from ProductTypes where TypeName = 'Tees';
Select * from ProductTypes where TypeName = 'Track Suits';
Select * from ProductTypes where TypeName = 'Earrings';
Select * from ProductTypes where TypeName = 'Necklaces';
Delete from ProductTypes where TypeName = 'Broaches';
Select * from ProductTypes;
Select * from Users where LastName = 'Swan';
Select * from Products;
Select * from Users;
Select * from Orders;
Delete from Orders;
Delete from Orders
WHERE Id = '3F2D5F1C-9D57-4E7C-836D-D51A32D571E0';
Update Orders
set ShippingAddress = '720 Seven Mile Ct',
ShippingCity = 'Carthage'
Output Inserted.Id
WHERE Id = '3F2D5F1C-9D57-4E7C-836D-D51A32D571E0';