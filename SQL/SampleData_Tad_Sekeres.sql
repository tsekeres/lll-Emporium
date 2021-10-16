INSERT INTO Categories (CategoryName)
VALUES ('Kitchen'),
	('Lawn and Garden');

INSERT INTO Users (FirstName, LastName, RoleTypeId, Bio)
VALUES ('Tad', 'Sekeres', (Select Id from RoleTypes where RoleTypeName = 'Super User'), 'Tad is a designer with an eye for the subtle touch that will let your friends and family know that “Live, Laugh, Love” is close to your heart and displayed for your neighbors to see. He is in our Kitchen and Bath department but also loves to dabble in the Garden!')

INSERT INTO ProductTypes (CategoryId, TypeName)
VALUES	((Select Id from Categories where CategoryName = 'Kitchen'), 'Towels'),
		((Select Id from Categories where CategoryName = 'Kitchen'), 'Wall Hanging'),
		((Select Id from Categories where CategoryName = 'Lawn and Garden'), 'Garden Decoration'),
		((Select Id from Categories where CategoryName = 'Lawn and Garden'), 'Mailbox Decoration');

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





