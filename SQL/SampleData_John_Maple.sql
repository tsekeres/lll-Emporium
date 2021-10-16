INSERT INTO Categories (CategoryName)
VALUES ('Construction'),
	   ('Biker Gear');

INSERT INTO Users (FirstName, LastName, RoleTypeId, Bio)
VALUES ('John', 'Maple', (Select Id from RoleTypes where RoleTypeName = 'Super User'), 'John Maple is a designer with a passion for making sure “Live, Laugh, Love” is displayed in unexpected places.')

INSERT INTO ProductTypes (CategoryId, TypeName)
VALUES	((Select Id from Categories where CategoryName = 'Construction'), 'Excavators'),
		((Select Id from Categories where CategoryName = 'Construction'), 'Bulldozers'),
		((Select Id from Categories where CategoryName = 'Biker Gear'), 'Leather Jackets'),
		((Select Id from Categories where CategoryName = 'Biker Gear'), 'Leather Vests');

INSERT INTO Products (ProductTypeId, DesignerId, ProductName, ProductDescription, ProductImageURL, Price, InventoryCount)
VALUES ((Select Id from ProductTypes where TypeName = 'Excavators'),
		(Select Id from Users where LastName = 'Maple'),
		'Excavator CX800B (Live, Laugh, Love)',
		'Conventional-swing excavator that tells your workers you are a life-long liver, laugher, and lover.',
		'https://storage.googleapis.com/lll-emporium/CX800B-00101-LLL.jpg',
		'224000.00',
		'3'),
	   ((Select Id from ProductTypes where TypeName = 'Excavators'),
		(Select Id from Users where LastName = 'Maple'),
		 'Excavator CX160D (Live, Laugh, Love with hearts)',
		 'People''s champion for digging basements, trenches and retentin pond. Let your customers know that you "LIve, Laugh and Love"',
		 'https://storage.googleapis.com/lll-emporium/CX160D-LLL.jpg',
		 '189750.00',
		 '2'),
	   ((Select Id from ProductTypes where TypeName = 'Bulldozers'),
		(Select Id from Users where LastName = 'Maple'),
		 '1150 M Bulldozer (Live, Laugh, Love with hearts)',
		 'M Series bulldozer with adjustable blade and steering sensitivity, with  “Live, Laugh, Love” hand lettering style with hearts',
		 'https://storage.googleapis.com/lll-emporium/1150M_CNH_1764_LLL.jpg',
		 '159750.00',
		 '2'),
		((Select Id from ProductTypes where TypeName = 'BullDozers'),
		 (Select Id from Users where LastName = 'Maple'),
		  '1650 M Bulldozer (Live, Laugh, Love decorative)',
		  'M Series heavy-duty bulldozer with "Live, Laugh, Love" in elegent font',
		  'https://storage.googleapis.com/lll-emporium/1650M_BBB_1480-LLL.jpg',
		  '167175.00',
		  '6'),
		((Select Id from ProductTypes where TypeName = 'Leather Jackets'),
		 (Select Id from Users where LastName = 'Maple'),
		  'Leather Bomber Biker Jacket (Live, Laugh, Love groovy)',
		  'Bomber jacket with "Live, Laugh, Love" in blue and red groovy font',
		  'https://storage.googleapis.com/lll-emporium/BomberFront.jpg',
		  '275.00',
		  '10'),
		((Select Id from ProductTypes where TypeName = 'Leather Jackets'),
		 (Select Id from Users where LastName = 'Maple'),
		  'Gatsby Black Leather Biker Jacket (Live, Laugh, Love)',
		  'Gatsby style black leather biker jacket with "Live Laugh Love" in bright yellow',
		  'https://storage.googleapis.com/lll-emporium/Gatsby%2BBlack%2BLeather-LLL.jpg',
		  '265.00',
		  '8'),
		((Select Id from ProductTypes where TypeName = 'Leather Vests'),
		 (Select Id from Users where LastName = 'Maple'),
		  'Leather Biker Vest (Live, Laugh, Love)',
		  'Rancher style Biker vest in with "Live, Laugh, Love" in bright yellow',
		  'https://storage.googleapis.com/lll-emporium/RancherVest_2000x-LLL.jpg',
		  '157.45',
		  '7'),
		((Select Id from ProductTypes where TypeName = 'Leather Vests'),
		 (Select Id from Users where LastName = 'Maple'),
		  'Bufallo Leather Biker Vest (Live, Laugh, Love)',
		  'Bufallo Leather Biker vest with "Live, Laugh, Love" in groovy style letters',
		  'https://storage.googleapis.com/lll-emporium/JullianBuffaloLeatherVest-LLL.jpg',
		  '149.99',
		  '3');





