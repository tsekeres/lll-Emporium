Insert INTO PaymentTypes (PaymentTypeName)
	VALUES ('MasterCard'), 
		   ('Visa'),
		   ('American Express'),
		   ('PayPal'),
		   ('BitCoin');

Insert INTO RoleTypes (RoleTypeName)
	VALUES ('Customer'), 
		   ('Designer'),
		   ('Administrator'),
		   ('Super User');

Insert INTO TransactionTypes (TransactionTypeName)
	VALUES ('Payment'), 
		   ('Partial Payment'),
		   ('Installment Payment'),
		   ('Refund'),
		   ('Fradulent Payment');


INSERT INTO Categories (CategoryName, CategoryImageURL)
VALUES ('Clothing', 'https://storage.googleapis.com/lll-emporium/CategoryIcons/Clothing.png'),
	   ('Accessories','https://storage.googleapis.com/lll-emporium/CategoryIcons/Accessories.png');

INSERT INTO Users (FirstName, LastName, DisplayName, EmailAddress, RoleTypeId, ProfilePicURL, Bio)
VALUES ('Honey-Rae', 'Swan', 'Honey-Ray Swan', 'HR@example.com', (Select Id from RoleTypes where RoleTypeName = 'Super User'),
		'https://avatars.githubusercontent.com/u/76716670?v=4',
		'Honey-Rae is a designer with a passion for making sure “Live, Laugh, Love” is close to our hearts or worn on our sleeve. She designs luxury tees, tracksuits, and jewelry.')

INSERT INTO ProductTypes (CategoryId, TypeName, ProductTypeImageURL)
VALUES	((Select Id from Categories where CategoryName = 'Clothing'), 'Tees', 'https://storage.googleapis.com/lll-emporium/ProductTypeIcons/Tees.png'),
		((Select Id from Categories where CategoryName = 'Clothing'), 'Track Suits', 'https://storage.googleapis.com/lll-emporium/ProductTypeIcons/Tracksuit.png'),
		((Select Id from Categories where CategoryName = 'Accessories'), 'Earrings', 'https://storage.googleapis.com/lll-emporium/ProductTypeIcons/earrings.png'),
		((Select Id from Categories where CategoryName = 'Accessories'), 'Necklaces', 'https://storage.googleapis.com/lll-emporium/ProductTypeIcons/necklace.png');

INSERT INTO Products (ProductTypeId, DesignerId, ProductName, ProductDescription, ProductImageURL, Price, InventoryCount)
VALUES ((Select Id from ProductTypes where TypeName = 'Tees'),
		(Select Id from Users where LastName = 'Swan'),
		'White Tee (Live, Laugh, Love)',
		'Simple white tee to let everyone know you’re a life-long liver, laugher, and lover.',
		'https://customtshirtshops.com/wp-content/uploads/2019/11/Live-Laugh-Love.jpg',
		'60.00',
		'213'),
	   ((Select Id from ProductTypes where TypeName = 'Tees'),
		(Select Id from Users where LastName = 'Swan'),
		 'White Tee (Live, Laugh, Love ft. Kim Jong Un)',
		 'White tee with the depiction of Kim Jong Un and the motto he lives by.',
		 'https://www.unclereco.com/catalog/images/products/4619-LIVE,_LAUGH,_LOVE_WHITE_TEE.jpg',
		 '75.00',
		 '124'),
	   ((Select Id from ProductTypes where TypeName = 'Track Suits'),
		(Select Id from Users where LastName = 'Swan'),
		 'Pink Tracksuit (Live, Laugh, Love)',
		 'Pink tracksuit displaying “Live, Laugh, Love” on the top and bottom!',
		 'https://www.canva.com/design/DAEsDA2f5Io/d_UTjRxKOOAiNB52ARKwYg/view?utm_content=DAEsDA2f5Io&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink',
		 '150.00',
		 '76'),
		((Select Id from ProductTypes where TypeName = 'Track Suits'),
		 (Select Id from Users where LastName = 'Swan'),
		  'Men''s tracksuit (Live, Laugh, Love)',
		  'Men''s tracksuit with a cool color scheme that features our motto!',
		  'https://www.canva.com/design/DAEsDFIFxOc/oGQnLZqka7iewBuKO6miZg/view?utm_content=DAEsDFIFxOc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink',
		  '175.00',
		  '65'),
		((Select Id from ProductTypes where TypeName = 'Earrings'),
		 (Select Id from Users where LastName = 'Swan'),
		  'Gold Earrings',
		  'Earrings that feature our motto!',
		  'https://i.etsystatic.com/6098040/r/il/ebba1c/992025432/il_1588xN.992025432_910o.jpg',
		  '25.00',
		  '189'),
		((Select Id from ProductTypes where TypeName = 'Earrings'),
		 (Select Id from Users where LastName = 'Swan'),
		  'Beaded Earrings (Live, Laugh, Love)',
		  'Handmade earrings that feature our motto!',
		  'https://i.pinimg.com/564x/db/b6/50/dbb650d2ea1f97d45fe7e03a373b7736.jpg',
		  '20.00',
		  '67'),
		((Select Id from ProductTypes where TypeName = 'Necklaces'),
		 (Select Id from Users where LastName = 'Swan'),
		  'Necklace (Live, Laugh, Love)',
		  'Charming necklaces featuring our motto!',
		  'https://cdn11.bigcommerce.com/s-57641/images/stencil/1280x1280/products/1490/7247/CPLLL-MOON-ball_chain_front_back__76666.1581952569.jpg?c=2',
		  '30.00',
		  '89'),
		((Select Id from ProductTypes where TypeName = 'Necklaces'),
		 (Select Id from Users where LastName = 'Swan'),
		  'Gold Necklace (Live, Laugh, Love)',
		  'Simple gold necklace with our motto!',
		  'https://i.pinimg.com/564x/33/cc/f3/33ccf3246ff486b9ae35b66ec3081af7.jpg',
		  '200.00',
		  '45');
		  
INSERT INTO Categories (CategoryName, CategoryImageURL)
VALUES ('Construction', 'https://storage.googleapis.com/lll-emporium/CategoryIcons/Construction.png'),
	   ('Biker Gear', 'https://storage.googleapis.com/lll-emporium/CategoryIcons/BikerGear.png');

INSERT INTO Users (FirstName, LastName, DisplayName, EmailAddress, RoleTypeId, ProfilePicURL, Bio)
VALUES ('John', 'Maple', 'John Maple', 'JM@example.com', (Select Id from RoleTypes where RoleTypeName = 'Super User'),
		'https://avatars.githubusercontent.com/u/51683901?v=4',
		'John Maple is a designer with a passion for making sure “Live, Laugh, Love” is displayed in unexpected places.')

INSERT INTO ProductTypes (CategoryId, TypeName, ProductTypeImageURL)
VALUES	((Select Id from Categories where CategoryName = 'Construction'), 'Excavators', 'https://storage.googleapis.com/lll-emporium/ProductTypeIcons/excavator.png'),
		((Select Id from Categories where CategoryName = 'Construction'), 'Bulldozers', 'https://storage.googleapis.com/lll-emporium/ProductTypeIcons/bulldozer.png'),
		((Select Id from Categories where CategoryName = 'Biker Gear'), 'Leather Jackets', 'https://storage.googleapis.com/lll-emporium/ProductTypeIcons/leatherjacket.png'),
		((Select Id from Categories where CategoryName = 'Biker Gear'), 'Leather Vests', 'https://storage.googleapis.com/lll-emporium/ProductTypeIcons/leathervest.png');

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

INSERT INTO Categories (CategoryName, CategoryImageURL)
VALUES ('Kitchen','https://storage.googleapis.com/lll-emporium/CategoryIcons/Kitchen.png'),
	('Lawn and Garden', 'https://storage.googleapis.com/lll-emporium/CategoryIcons/LawnIcon.png');

INSERT INTO Users (FirstName, LastName, DisplayName, EmailAddress, RoleTypeId, ProfilePicURL, Bio)
VALUES ('Tad', 'Sekeres', 'Tad Sekeres', 'TS@example.com', (Select Id from RoleTypes where RoleTypeName = 'Super User'), 
		'https://avatars.githubusercontent.com/u/74842096?v=4',
		'Tad is a designer with an eye for the subtle touch that will let your friends and family know that “Live, Laugh, Love” is close to your heart and displayed for your neighbors to see. He is in our Kitchen and Bath department but also loves to dabble in the Garden!')

INSERT INTO ProductTypes (CategoryId, TypeName, ProductTypeImageURL)
VALUES	((Select Id from Categories where CategoryName = 'Kitchen'), 'Towels','https://storage.googleapis.com/lll-emporium/ProductTypeIcons/towels.png'),
		((Select Id from Categories where CategoryName = 'Kitchen'), 'Wall Hanging','https://storage.googleapis.com/lll-emporium/ProductTypeIcons/wallhanging.png'),
		((Select Id from Categories where CategoryName = 'Lawn and Garden'), 'Garden Decoration','https://storage.googleapis.com/lll-emporium/ProductTypeIcons/garden.png'),
		((Select Id from Categories where CategoryName = 'Lawn and Garden'), 'Mailbox Decoration','https://storage.googleapis.com/lll-emporium/ProductTypeIcons/mailbox.png');

INSERT INTO Products (ProductTypeId, DesignerId, ProductName, ProductDescription, ProductImageURL, Price, InventoryCount)
VALUES ((Select Id from ProductTypes where TypeName = 'Towels'),
		(Select Id from Users where LastName = 'Sekeres'),
		'White Towel (Live, Laugh, Love)',
		'Simple white towel to let everyone know you’re a life-long liver, laugher, and lover.',
		'https://ctl.s6img.com/society6/img/kjM8HiTy0rf0cUl9q3BNEGGt_CA/w_700/bath-towels/small/front/~artwork,fw_3708,fh_7410,fy_1347,iw_3696,ih_4704/s6-original-art-uploads/society6/uploads/misc/08a80916633741f7a7c81d729299cd39/~~/live-laugh-love444723-bath-towels.jpg',
		'30.00',
		'5'),
	   ((Select Id from ProductTypes where TypeName = 'Towels'),
		(Select Id from Users where LastName = 'Sekeres'),
		 'Live Laugh Love towel set',
		 'White towel set for kitchen or bath.',
		 'https://i.pinimg.com/originals/19/1f/8c/191f8c86e3ab92e58aee1a2ee623edce.jpg',
		 '75.00',
		 '9'),
	   ((Select Id from ProductTypes where TypeName = 'Wall Hanging'),
		(Select Id from Users where LastName = 'Sekeres'),
		 'Wall art on canvas (Live, Laugh, Love)',
		 'Beautiful wall art piece on three canvases.',
		 'https://cdn.shopify.com/s/files/1/0046/8575/8564/products/live-laugh-love-canvas-art-set-of-3-40-x-60cm-unframed-canvas-print-artlll000005010-clock-canvas-28355478487125_1000x.jpg?v=1628160397',
		 '150.00',
		 '5'),
		((Select Id from ProductTypes where TypeName = 'Wall Hanging'),
		 (Select Id from Users where LastName = 'Sekeres'),
		  'Black stencil wall hanging (Live, Laugh, Love)',
		  'Black, fancy font wall hanging.',
		  'https://m.media-amazon.com/images/I/618cdmjXf0L._AC_SS450_.jpg',
		  '135.00',
		  '5'),
		((Select Id from ProductTypes where TypeName = 'Garden Decoration'),
		 (Select Id from Users where LastName = 'Sekeres'),
		  'Garden decoration',
		  'Sturdy steel garden display that features our motto!',
		  'https://i.etsystatic.com/5446441/r/il/89bf7d/52558364/il_794xN.52558364.jpg',
		  '45.00',
		  '7'),
		((Select Id from ProductTypes where TypeName = 'Garden Decoration'),
		 (Select Id from Users where LastName = 'Sekeres'),
		  'Garden banner (Live, Laugh, Love)',
		  'Banner with metal stake hanger that features our motto!',
		  'https://m.media-amazon.com/images/I/71GOOTmsPHL._AC_SS450_.jpg',
		  '20.00',
		  '67'),
		((Select Id from ProductTypes where TypeName = 'Mailbox Decoration'),
		 (Select Id from Users where LastName = 'Sekeres'),
		  'Mailbox cover (Live, Laugh, Love)',
		  'Charming cover for your mailbox featuring our motto!',
		  'https://img.btdmp.com/10102/10102950/products/0x540@1632219169c1c739811b.jpeg',
		  '30.00',
		  '12'),
		((Select Id from ProductTypes where TypeName = 'Mailbox Decoration'),
		 (Select Id from Users where LastName = 'Sekeres'),
		  'Welcome Mat (Live, Laugh, Love)',
		  'Fabulous Live, Laugh, Love welcome mat for your front door.',
		  'https://www.personalizationmall.com/cat_image/600/20894-46554-180405115409.jpg',
		  '140.99',
		  '18');

INSERT INTO Categories (CategoryName, CategoryImageUrl)
VALUES ('Bathroom Decor', 'https://storage.googleapis.com/lll-emporium/CategoryIcons/Bath.png'),
	('Auto Accessories', 'https://storage.googleapis.com/lll-emporium/CategoryIcons/AutoAccessories.png');

INSERT INTO Users (FirstName, LastName, DisplayName, EmailAddress, RoleTypeId, ProfilePicURL, Bio)
VALUES ('Jonathon', 'Joyner', 'Jonathon Joyner', 'JJ@example.com', (Select Id from RoleTypes where RoleTypeName = 'Super User'),
		'https://avatars.githubusercontent.com/u/67886630?v=4',
		'Johathan is a designer with an eye for ways to let your friends and family know that “Live, Laugh, Love” is close to your heart. He designs for bath and auto accessories!')

INSERT INTO ProductTypes (CategoryId, TypeName, ProductTypeImageURL)
VALUES	((Select Id from Categories where CategoryName = 'Bathroom Decor'), 'Bath Towels', 'https://storage.googleapis.com/lll-emporium/ProductTypeIcons/towels.png'),
		((Select Id from Categories where CategoryName = 'Bathroom Decor'), 'Shower Curtains', 'https://storage.googleapis.com/lll-emporium/ProductTypeIcons/showercurtains.png'),
		((Select Id from Categories where CategoryName = 'Bathroom Decor'), 'Loofahs', 'https://storage.googleapis.com/lll-emporium/ProductTypeIcons/loofah.png'),
		((Select Id from Categories where CategoryName = 'Auto Accessories'), 'Air Fresheners', 'https://storage.googleapis.com/lll-emporium/ProductTypeIcons/airfreshener.png'),
		((Select Id from Categories where CategoryName = 'Auto Accessories'), 'Car Decal', 'https://storage.googleapis.com/lll-emporium/ProductTypeIcons/cardecal.png');

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
		
INSERT INTO Orders ( CustomerId, ShippingAddress, ShippingCity,
					 ShippingState, ShippingZip, OrderDate, Completed )
VALUES ((SELECT Id FROM Users WHERE FirstName = 'Honey-Rae'), '1000 Something', 'Boston',
        'MA', '02113', CURRENT_TIMESTAMP, '0'),
		((SELECT Id FROM Users WHERE FirstName = 'John'), '123 Somewhere','Nashville',
        'TN', '37211', CURRENT_TIMESTAMP, '0')

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



