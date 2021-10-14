INSERT INTO Categories (CategoryName)
VALUES ('Bathroom Decor'),
	('Auto Accessories');

INSERT INTO Users (FirstName, LastName, IsDesigner, Bio)
VALUES ('Jonathon', 'Joyner', '1', 'Johathan is a designer with an eye for ways to let your friends and family know that “Live, Laugh, Love” is close to your heart. He designs for bath and auto accessories!')

INSERT INTO ProductTypes (CategoryId, TypeName)
VALUES	((Select Id from Categories where CategoryName = 'Bathroom Decor'), 'Bath Towels'),
		((Select Id from Categories where CategoryName = 'Bathroom Decor'), 'Shower Curtains'),
		((Select Id from Categories where CategoryName = 'Bathroom Decor'), 'Loofahs'),
		((Select Id from Categories where CategoryName = 'Auto Accessories'), 'Air Fresheners'),
		((Select Id from Categories where CategoryName = 'Auto Accessories'), 'Car Decal');

INSERT INTO Products (ProductTypeId, DesignerId, ProductName, ProductDescription, ProductImageURL, Price, InventoryCount)
VALUES ((Select Id from ProductTypes where TypeName = 'Bath Towels'),
		(Select Id from Users where LastName = 'Joyner'),
		'Bath Towel Set with "Live, Laugh, Love."',
		'',
		'',
		'24.95',
		'5'),
	   ((Select Id from ProductTypes where TypeName = 'Loofahs'),
		(Select Id from Users where LastName = 'Joyner'),
		 'Loofa with "Live, Laugh, Love"',
		 '',
		 '',
		 '7.49',
		 ''),
	   ((Select Id from ProductTypes where TypeName = 'Car Decal'),
		(Select Id from Users where LastName = 'Joyner'),
		 'Car Wrap with "Live, Laugh, Love"',
		 '',
		 '',
		 '24.99',
		 '22'),
		((Select Id from ProductTypes where TypeName = 'Air Fresheners'),
		 (Select Id from Users where LastName = 'Joyner'),
		  'Air Freshener (Live, Laugh, Love)',
		  '',
		  'https://storage.googleapis.com/lll-emporium/LLL-AirFreshener.jpg',
		  '9.97',
		  '32');
		




