INSERT INTO Orders ( CustomerId, ShippingAddress, ShippingCity,
					 ShippingState, ShippingZip, OrderDate, Completed )
VALUES ((SELECT Id FROM Users WHERE FirstName = 'Honey-Rae'), '1000 Something', 'Boston',
        'MA', '02113', CURRENT_TIMESTAMP, '0'),
		((SELECT Id FROM Users WHERE FirstName = 'John'), '710 Seven Mile Ct','Nashville',
        'TN', '37211', CURRENT_TIMESTAMP, '0')