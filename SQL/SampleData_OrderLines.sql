INSERT INTO OrderLines ( OrderId, ProductId, UnitPrice, Quantity, Discount )
VALUES ((SELECT Id FROM Orders WHERE CustomerId = (Select Id from Users where FirstName = 'John')), (SELECT Id FROM Products WHERE ProductName = '1150 M Bulldozer (Live, Laugh, Love with hearts)'),
        '224000.00', '1', '0'),
		((SELECT Id FROM Orders WHERE CustomerId = (Select Id from Users where FirstName = 'John')),(SELECT Id FROM Products WHERE ProductName = 'Excavator CX800B (Live, Laugh, Love)'),
        '159750.00', '1', '0'),
		((SELECT Id FROM Orders WHERE CustomerId = (Select Id from Users where FirstName = 'John')),(SELECT ID FROM Products WHERE ProductName = 'Leather Biker Vest (Live, Laugh, Love)'),
        '149.99', '1', '5.00'),
		((SELECT Id FROM Orders WHERE CustomerId = (Select Id from Users where FirstName = 'Honey-Rae')),(SELECT ID FROM Products WHERE ProductName = 'Pink Tracksuit (Live, Laugh, Love)'),
        '150.00', '1', '5.00'),
		((SELECT Id FROM Orders WHERE CustomerId = (Select Id from Users where FirstName = 'Honey-Rae')),(SELECT ID FROM Products WHERE ProductName = 'White Tee (Live, Laugh, Love ft. Kim Jong Un)'),
        '75.00', '1', '5.00')