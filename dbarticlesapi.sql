CREATE DATABASE dbarticlesapi;
GO

USE dbarticlesapi;
GO

CREATE TABLE Articles(
	id NVARCHAR(10) PRIMARY KEY,
	[name] NVARCHAR(20) NOT NULL,
	[description] NVARCHAR(200) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	model NVARCHAR(10) NOT NULL,
);
GO

INSERT INTO Articles VALUES ('W2C4r6a89a', 'Televisor', 'Enjoy the new Liquid technology developed by the best engineers in the world', 12000, 'W2C4r6a89a');
INSERT INTO Articles VALUES ('a3g4vgF9G3', 'Refrigerator', 'Keep fresh your food with the new refrigerator of own branch', 9000, 'a3g4vgF9G3');
INSERT INTO Articles VALUES ('Y1h8C4HskQ', 'Laptop', 'The most powerful laptop in the world', 23000, 'Y1h8C4HskQ');
GO

SELECT * FROM Articles;