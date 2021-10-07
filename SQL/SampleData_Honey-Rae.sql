INSERT INTO Categories (CategoryName)
VALUES ('Clothing'),
	   ('Accessories');

INSERT INTO Users (FirstName, LastName, IsDesigner, Bio)
VALUES ('Honey-Rae', 'Swan', '1', 'Honey-Rae is a designer with a passion for making sure �Live, Laugh, Love� is close to our hearts or worn on our sleeve. She designs luxury tees, tracksuits, and jewelry.')

INSERT INTO ProductTypes (CategoryId, TypeName)
VALUES	((Select Id from Categories where CategoryName = 'Clothing'), 'Tees'),
		((Select Id from Categories where CategoryName = 'Clothing'), 'Track Suits'),
		((Select Id from Categories where CategoryName = 'Accessories'), 'Earrings'),
		((Select Id from Categories where CategoryName = 'Accessories'), 'Necklaces');

INSERT INTO Products (ProductTypeId, DesignerId, ProductName, ProductDescription, ProductImageURL, Price, InventoryCount)
VALUES ((Select Id from ProductTypes where TypeName = 'Tees'),
		(Select Id from Users where LastName = 'Swan'),
		'White Tee (Live, Laugh, Love)',
		'Simple white tee to let everyone know you�re a life-long liver, laugher, and lover.',
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
		 'Pink tracksuit displaying �Live, Laugh, Love� on the top and bottom!',
		 'https://www.canva.com/design/DAEsDA2f5Io/d_UTjRxKOOAiNB52ARKwYg/view?utm_content=DAEsDA2f5Io&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink',
		 '150.00',
		 '76'),
		((Select Id from ProductTypes where TypeName = 'Track Suits'),
		 (Select Id from Users where LastName = 'Swan'),
		  'Men' + char(39) + 's tracksuit (Live, Laugh, Love)',
		  'Men' + char(39) + 's tracksuit with a cool color scheme that features our motto!',
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





