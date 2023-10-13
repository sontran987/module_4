create DATABASE jewelry_shop;
use jewelry_shop;
create TABLE role_user(
id int PRIMARY KEY AUTO_INCREMENT,
name_role VARCHAR(50)
);
create TABLE account_user(
id int PRIMARY KEY AUTO_INCREMENT,
user_name VARCHAR(255) NOT NULL UNIQUE ,
user_password VARCHAR(255) NOT NULL,
flag_deleted bit(1),
role_user_id int , FOREIGN KEY(role_user_id) REFERENCES role_user(id)
);

create TABLE user_information(
id int PRIMARY KEY AUTO_INCREMENT,
name_user VARCHAR(50) ,
gender bit(1),
birthday VARCHAR(50) ,
address VARCHAR(50) , 
phone_number VARCHAR(12),
id_card VARCHAR(50) ,
flag_deleted bit(1),
account_user_id int , FOREIGN KEY(account_user_id) REFERENCES account_user(id)
);
create TABLE type_product(
id int PRIMARY KEY AUTO_INCREMENT,
name_type_product VARCHAR(50) 
);
create TABLE supplier(
id int PRIMARY KEY AUTO_INCREMENT,
name_supplier VARCHAR(100) 
);
create TABLE category_product(
id int PRIMARY KEY AUTO_INCREMENT,
category_product_name VARCHAR(100)
);
create TABLE size(
id int PRIMARY KEY AUTO_INCREMENT,
size_name VARCHAR(100),
conversion_rate DOUBLE
);
create TABLE product(
id int PRIMARY KEY AUTO_INCREMENT,
name_product VARCHAR(255) NOT NULL ,
describe_product LONGTEXT,
quantity int not null,
price DOUBLE NOT NULL ,
flag_deleted bit(1),
category_product_id int, FOREIGN KEY(category_product_id) REFERENCES category_product(id),
type_product_id int , FOREIGN KEY(type_product_id) REFERENCES type_product(id),
supplier_id int , FOREIGN KEY(supplier_id) REFERENCES supplier(id)
);
create TABLE image(
id int PRIMARY KEY AUTO_INCREMENT,
image_url LONGTEXT,
product_id int , FOREIGN KEY(product_id) REFERENCES product(id)
);
create TABLE order_user (
id int PRIMARY KEY AUTO_INCREMENT,
order_date VARCHAR(50) ,
note VARCHAR(100),
flag_deleted bit(1),
user_information_id int , FOREIGN KEY(user_information_id) REFERENCES user_information(id)
);
create TABLE order_detail(
id int PRIMARY KEY AUTO_INCREMENT ,
quantity int ,
flag_deleted bit(1) ,
price VARCHAR(20) ,
size_id int, FOREIGN KEY(size_id) REFERENCES size(id),
order_user_id int , FOREIGN KEY(order_user_id) REFERENCES order_user(id),
product_id int ,FOREIGN KEY(product_id) REFERENCES product(id)
);
create TABLE order_cart(
id int PRIMARY KEY AUTO_INCREMENT ,
quantity int ,
flag_deleted bit(1) ,
size_id int, FOREIGN KEY(size_id) REFERENCES size(id),
user_information_id int , FOREIGN KEY(user_information_id) REFERENCES user_information(id),
product_id int ,FOREIGN KEY(product_id) REFERENCES product(id)
);
-- data :
-- role_user 
INSERT INTO jewelry_shop.role_user (id, name_role) VALUES (1, 'ROLE_Admin');
INSERT INTO jewelry_shop.role_user (id, name_role) VALUES (2, 'ROLE_User');
 -- account 
INSERT INTO jewelry_shop.account_user (id, user_name, user_password, flag_deleted, role_user_id) VALUES (1, 'lsolon0@gmail.com', '$2a$12$Gy8jAyCLPAt57w1nYFBlRuvVPSTWvwoGImD4C0dabv76hfPmghAQu', false, 2);
INSERT INTO jewelry_shop.account_user (id, user_name, user_password, flag_deleted, role_user_id) VALUES (2, 'gbiskupek1@gmail.com', '$2a$12$Gy8jAyCLPAt57w1nYFBlRuvVPSTWvwoGImD4C0dabv76hfPmghAQu', false, 1);
INSERT INTO jewelry_shop.account_user (id, user_name, user_password, flag_deleted, role_user_id) VALUES (3, 'sbinley2@gmail.com', '$2a$12$Gy8jAyCLPAt57w1nYFBlRuvVPSTWvwoGImD4C0dabv76hfPmghAQu', false, 2);
INSERT INTO jewelry_shop.account_user (id, user_name, user_password, flag_deleted, role_user_id) VALUES (4, 'jmerrigan3@gmail.com', '$2a$12$Gy8jAyCLPAt57w1nYFBlRuvVPSTWvwoGImD4C0dabv76hfPmghAQu', false, 1);
INSERT INTO jewelry_shop.account_user (id, user_name, user_password, flag_deleted, role_user_id) VALUES (5, 'emundy4@gmail.com', '$2a$12$Gy8jAyCLPAt57w1nYFBlRuvVPSTWvwoGImD4C0dabv76hfPmghAQu', false, 2);
INSERT INTO jewelry_shop.account_user (id, user_name, user_password, flag_deleted, role_user_id) VALUES (6, 'glecount5@gmail.com', '$2a$12$Gy8jAyCLPAt57w1nYFBlRuvVPSTWvwoGImD4C0dabv76hfPmghAQu', false, 2);
INSERT INTO jewelry_shop.account_user (id, user_name, user_password, flag_deleted, role_user_id) VALUES (7, 'rbourcq6@gmail.com', '$2a$12$Gy8jAyCLPAt57w1nYFBlRuvVPSTWvwoGImD4C0dabv76hfPmghAQu', false, 1);
INSERT INTO jewelry_shop.account_user (id, user_name, user_password, flag_deleted, role_user_id) VALUES (8, 'wtapley7@gmail.com', '$2a$12$Gy8jAyCLPAt57w1nYFBlRuvVPSTWvwoGImD4C0dabv76hfPmghAQu', false, 2);
INSERT INTO jewelry_shop.account_user (id, user_name, user_password, flag_deleted, role_user_id) VALUES (9, 'bwitherop8@gmail.com', '$2a$12$Gy8jAyCLPAt57w1nYFBlRuvVPSTWvwoGImD4C0dabv76hfPmghAQu', false, 2);
INSERT INTO jewelry_shop.account_user (id, user_name, user_password, flag_deleted, role_user_id) VALUES (10, 'aletchmore9@gmail.com', '$2a$12$Gy8jAyCLPAt57w1nYFBlRuvVPSTWvwoGImD4C0dabv76hfPmghAQu', false, 2);
-- user_information
insert into user_information (id, address, birthday, flag_deleted, id_card, name_user, phone_number, account_user_id) values (1, 'Apt 1252', '2000-08-05', true, 1, 'Sharity Bayns', 9048832111, 4);
insert into user_information (id, address, birthday, flag_deleted, id_card, name_user, phone_number, account_user_id) values (2, 'Apt 1574', '2000-06-09', true, 8, 'Val Justis', 8818158216, 5);
insert into user_information (id, address, birthday, flag_deleted, id_card, name_user, phone_number, account_user_id) values (3, 'PO Box 32223', '1999-11-18', false, 8, 'Justen Prowting', 8248063123, 1);
insert into user_information (id, address, birthday, flag_deleted, id_card, name_user, phone_number, account_user_id) values (4, 'Apt 1349', '2000-05-17', true, 2, 'Mireille Willers', 4825274350, 8);
insert into user_information (id, address, birthday, flag_deleted, id_card, name_user, phone_number, account_user_id) values (5, 'Suite 84', '2000-09-30', true, 8, 'Bryce Thorburn', 6967829043, 4);
insert into user_information (id, address, birthday, flag_deleted, id_card, name_user, phone_number, account_user_id) values (6, 'Apt 413', '1999-12-19', false, 9, 'Freeland Tanby', 414740150, 8);
insert into user_information (id, address, birthday, flag_deleted, id_card, name_user, phone_number, account_user_id) values (7, 'Apt 1983', '2000-08-25', false, 5, 'Una Maas', 7074681710, 9);
insert into user_information (id, address, birthday, flag_deleted, id_card, name_user, phone_number, account_user_id) values (8, 'Apt 1624', '2000-09-12', true, 12, 'Loren Gayne', 5005337900, 1);
insert into user_information (id, address, birthday, flag_deleted, id_card, name_user, phone_number, account_user_id) values (9, 'PO Box 99483', '2000-08-15', false, 8, 'Erwin Hastwell', 8817057554, 5);
insert into user_information (id, address, birthday, flag_deleted, id_card, name_user, phone_number, account_user_id) values (10, 'Apt 1393', '2000-08-28', false, 3, 'Hope Mourgue', 5345047968, 3);
insert into user_information (id, address, birthday, flag_deleted, id_card, name_user, phone_number, account_user_id) values (11, 'Suite 64', '2000-04-14', true, 9, 'Hershel Winchurst', 273802039, 4);
insert into user_information (id, address, birthday, flag_deleted, id_card, name_user, phone_number, account_user_id) values (12, '15th Floor', '2000-01-26', false, 6, 'Alexandrina Hatje', 5638688174, 4);
insert into user_information (id, address, birthday, flag_deleted, id_card, name_user, phone_number, account_user_id) values (13, '7th Floor', '2000-07-19', false, 2, 'Reine Malam', 4358663613, 7);
insert into user_information (id, address, birthday, flag_deleted, id_card, name_user, phone_number, account_user_id) values (14, '9th Floor', '2000-08-16', false, 3, 'Rory Espinazo', 790651055, 4);
insert into user_information (id, address, birthday, flag_deleted, id_card, name_user, phone_number, account_user_id) values (15, 'Suite 49', '2000-04-19', false, 2, 'Boyce Slayton', 3684805949, 2);

-- type product 
INSERT INTO jewelry_shop.type_product (id, name_type_product) VALUES (1, 'Ring');
INSERT INTO jewelry_shop.type_product (id, name_type_product) VALUES (2, 'Signed ring');
INSERT INTO jewelry_shop.type_product (id, name_type_product) VALUES (3, 'Wedding ring');
INSERT INTO jewelry_shop.type_product (id, name_type_product) VALUES (4, 'Proposal ring');
INSERT INTO jewelry_shop.type_product (id, name_type_product) VALUES (5, 'Bracelet');
INSERT INTO jewelry_shop.type_product (id, name_type_product) VALUES (6, 'Signed bracelet');
INSERT INTO jewelry_shop.type_product (id, name_type_product) VALUES (7, 'Necklace');
INSERT INTO jewelry_shop.type_product (id, name_type_product) VALUES (8, 'Earrings');
INSERT INTO jewelry_shop.type_product (id, name_type_product) VALUES (9, 'Bangles');

-- supplier
INSERT INTO jewelry_shop.supplier (id, name_supplier) VALUES (1, 'Gemstone Jewelry Suppliers');
INSERT INTO jewelry_shop.supplier (id, name_supplier) VALUES (2, 'Precious Stone Jewelry Suppliers');
INSERT INTO jewelry_shop.supplier (id, name_supplier) VALUES (3, 'Diamond Jewelry Suppliers');
INSERT INTO jewelry_shop.supplier (id, name_supplier) VALUES (4, 'Emerald Jewelry Suppliers');
INSERT INTO jewelry_shop.supplier (id, name_supplier) VALUES (5, 'Sapphire Jewelry Suppliers');
INSERT INTO jewelry_shop.supplier (id, name_supplier) VALUES (6, 'Ruby Jewelry Suppliers');
INSERT INTO jewelry_shop.supplier (id, name_supplier) VALUES (7, 'Amethyst Jewelry Suppliers');
INSERT INTO jewelry_shop.supplier (id, name_supplier) VALUES (8, 'Opal Jewelry Suppliers');
INSERT INTO jewelry_shop.supplier (id, name_supplier) VALUES (9, 'Tanzanite Jewelry Suppliers');
INSERT INTO jewelry_shop.supplier (id, name_supplier) VALUES (10, 'Citrine Jewelry Suppliers');
-- category_product
INSERT INTO jewelry_shop.category_product (id, category_product_name) VALUES (1, 'Yellow');
INSERT INTO jewelry_shop.category_product (id, category_product_name) VALUES (2, 'Silver');
INSERT INTO jewelry_shop.category_product (id, category_product_name) VALUES (3, 'Titanium');
INSERT INTO jewelry_shop.category_product (id, category_product_name) VALUES (4, 'Gemstone');

-- size
INSERT INTO jewelry_shop.size (id, size_name, conversion_rate) VALUES (1, 'SIZE 6', 1.2);
INSERT INTO jewelry_shop.size (id, size_name, conversion_rate) VALUES (2, 'SIZE 7', 1.4);
INSERT INTO jewelry_shop.size (id, size_name, conversion_rate) VALUES (3, 'SIZE 8', 1.5);
INSERT INTO jewelry_shop.size (id, size_name, conversion_rate) VALUES (4, 'SIZE 9', 1.6);
INSERT INTO jewelry_shop.size (id, size_name, conversion_rate) VALUES (5, 'SIZE 10', 1.7);
INSERT INTO jewelry_shop.size (id, size_name, conversion_rate) VALUES (6, 'SIZE 11', 1.8);
INSERT INTO jewelry_shop.size (id, size_name, conversion_rate) VALUES (7, 'SIZE 12', 1.9);
INSERT INTO jewelry_shop.size (id, size_name, conversion_rate) VALUES (8, 'SIZE 13', 2);
INSERT INTO jewelry_shop.size (id, size_name, conversion_rate) VALUES (9, 'SIZE 14', 2.1);
INSERT INTO jewelry_shop.size (id, size_name, conversion_rate) VALUES (10, 'SIZE 15', 2.2);
INSERT INTO jewelry_shop.size (id, size_name, conversion_rate) VALUES (11, 'SIZE 16', 2.3);
INSERT INTO jewelry_shop.size (id, size_name, conversion_rate) VALUES (12, 'SIZE 17', 2.4);
INSERT INTO jewelry_shop.size (id, size_name, conversion_rate) VALUES (13, 'SIZE 18', 2.5);
INSERT INTO jewelry_shop.size (id, size_name, conversion_rate) VALUES (14, 'SIZE 19', 2.6);
INSERT INTO jewelry_shop.size (id, size_name, conversion_rate) VALUES (15, 'SIZE 20', 2.7);

-- product
INSERT INTO jewelry_shop.product (id, name_product, describe_product, quantity, price, flag_deleted, category_product_id, type_product_id, supplier_id) VALUES (1, 'Sythetic STYLE Silver Bracelet', 'Sythetic STYLE Silver Bracelet by PNJ Unisex ZTXMW000013 is a unisex jewelry (for both men and women) made from silver and designed with sythetic (artificial) stones to create a unique style and attract.', 30, 3000, false, 2, 9, 1);
INSERT INTO jewelry_shop.product (id, name_product, describe_product, quantity, price, flag_deleted, category_product_id, type_product_id, supplier_id) VALUES (2, 'White gold wedding ring with 14K sapphire stone True Love SP00W000060', 'White gold wedding ring with 14K sapphire stone is a stunning piece of jewelry that combines the elegance of white gold with the vibrant beauty of a sapphire gemstone.', 20, 2000, false, 1, 3, 2);
INSERT INTO jewelry_shop.product (id, name_product, describe_product, quantity, price, flag_deleted, category_product_id, type_product_id, supplier_id) VALUES (3, 'Pair of 14K White Gold Rings with Sapphire True Love 00060-00059', 'These rings are expertly crafted from high-quality 14K white gold, a precious metal that is renowned for its elegance and durability. The white gold band adds a touch of sophistication and timelessness to the overall design', 10, 2900, false, 1, 3, 1);
INSERT INTO jewelry_shop.product (id, name_product, describe_product, quantity, price, flag_deleted, category_product_id, type_product_id, supplier_id) VALUES (4, 'Pair of 14K White Gold Diamond wedding rings 10580-04378', 'These wedding rings are crafted from high-quality 14K white gold, a precious metal known for its timeless elegance and durability. The white gold band adds a touch of sophistication and enhances the brilliance of the diamonds.', 20, 4000, false, 1, 3, 1);
INSERT INTO jewelry_shop.product (id, name_product, describe_product, quantity, price, flag_deleted, category_product_id, type_product_id, supplier_id) VALUES (5, 'Men''s 14K Cinderella white diamond wedding ring DD00W004378', 'The Men''s 14K Cinderella white diamond wedding ring, is a remarkable and sophisticated piece of jewelry that embodies style, elegance, and everlasting love.', 20, 3000, false, 1, 3, 1);
INSERT INTO jewelry_shop.product (id, name_product, describe_product, quantity, price, flag_deleted, category_product_id, type_product_id, supplier_id) VALUES (6, '18K Italian white gold wire 0000W000949', 'This white gold wire is crafted from high-quality 18K Italian white gold, a prestigious and sought-after material known for its exceptional purity and lustrous appearance. The 18K gold content ensures a luxurious and durable piece that will stand the test of time.', 30, 5000, false, 1, 7, 3);
INSERT INTO jewelry_shop.product (id, name_product, describe_product, quantity, price, flag_deleted, category_product_id, type_product_id, supplier_id) VALUES (7, 'Unisex Silver Ring with Stone XM00W000069', 'This ring is crafted from high-quality silver, a precious metal known for its durability and timeless appeal. The silver band has a sleek and polished finish, adding a touch of elegance to the overall design.', 100, 1000, false, 2, 1, 4);
INSERT INTO jewelry_shop.product (id, name_product, describe_product, quantity, price, flag_deleted, category_product_id, type_product_id, supplier_id) VALUES (8, 'Unisex Silver Ring 0000B060000', 'A versatile and stylish piece of jewelry, suitable for both men and women. This ring is crafted from premium silver, a precious metal known for its durability and timeless charm. The silver ring band has a smooth and glossy finish, adding a touch of elegance to the overall design.', 50, 500, false, 2, 1, 1);
INSERT INTO jewelry_shop.product (id, name_product, describe_product, quantity, price, flag_deleted, category_product_id, type_product_id, supplier_id) VALUES (9, '14K Gold Earrings with Freshwater Pearls PF00X000011', 'These earrings are crafted from high-quality 14K gold, a precious metal known for its durability and luxurious appeal. The gold setting adds a touch of warmth and richness to the overall design, enhancing the beauty of the freshwater pearls.', 20, 1000, false, 1, 8, 7);

-- image
INSERT INTO jewelry_shop.image (id, image_url, product_id) VALUES (1, 'https://cdn.pnj.io/images/detailed/174/on-slztmxw000003-lac-tay-bac-dinh-da-synthetic-style-by-pnj-feminine-4.jpg', 1);
INSERT INTO jewelry_shop.image (id, image_url, product_id) VALUES (2, 'https://cdn.pnj.io/images/detailed/174/sp-slztmxw000003-lac-tay-bac-dinh-da-synthetic-style-by-pnj-feminine-1.png', 1);
INSERT INTO jewelry_shop.image (id, image_url, product_id) VALUES (3, 'https://cdn.pnj.io/images/detailed/117/gnsp00w000060-nhan-cuoi-kim-cuong-vang-trang-14k-pnj-01.png', 2);
INSERT INTO jewelry_shop.image (id, image_url, product_id) VALUES (4, 'https://cdn.pnj.io/images/detailed/127/gnsp00w000060-nhan-cuoi-vang-trang-14k-dinh-da-saphire-pnj-true-love-3.png', 2);
INSERT INTO jewelry_shop.image (id, image_url, product_id) VALUES (5, 'https://cdn.pnj.io/images/thumbnails/300/300/detailed/183/sp-cap-nhan-cuoi-vang-trang-14k-dinh-da-saphire-pnj-true-love-00060-00059-1.png', 3);
INSERT INTO jewelry_shop.image (id, image_url, product_id) VALUES (6, 'https://cdn.pnj.io/images/thumbnails/485/485/detailed/171/GNDDDDW010580-GNDD00W004378-1.png', 4);
INSERT INTO jewelry_shop.image (id, image_url, product_id) VALUES (7, 'https://cdn.pnj.io/images/thumbnails/485/485/detailed/171/GNDDDDW010580-1.png', 4);
INSERT INTO jewelry_shop.image (id, image_url, product_id) VALUES (8, 'https://cdn.pnj.io/images/thumbnails/485/485/detailed/158/gndd00w004378-nhan-nam-kim-cuong-vang-14k-diamond-4.jpg', 5);
INSERT INTO jewelry_shop.image (id, image_url, product_id) VALUES (9, 'https://cdn.pnj.io/images/thumbnails/485/485/detailed/158/gndd00w004378-nhan-nam-kim-cuong-vang-14k-diamond-1.png', 5);
INSERT INTO jewelry_shop.image (id, image_url, product_id) VALUES (10, 'https://cdn.pnj.io/images/detailed/38/gm_0000w000049-mat-day-chuyen-vang-trang-y-18k-pnj-01.png', 6);
INSERT INTO jewelry_shop.image (id, image_url, product_id) VALUES (11, 'https://cdn.pnj.io/images/thumbnails/485/485/detailed/104/gm_0000w000049-mat-day-chuyen-vang-trang-y-18k-pnj-04.jpg', 6);
INSERT INTO jewelry_shop.image (id, image_url, product_id) VALUES (12, 'https://cdn.pnj.io/images/detailed/174/sp-snxm00w000069-nhan-bac-dinh-da-cz-style-by-pnj-unisex-1.png', 7);
INSERT INTO jewelry_shop.image (id, image_url, product_id) VALUES (13, 'https://cdn.pnj.io/images/detailed/174/sp-snxm00w000069-nhan-bac-dinh-da-cz-style-by-pnj-unisex-2.png', 7);
INSERT INTO jewelry_shop.image (id, image_url, product_id) VALUES (14, 'https://cdn.pnj.io/images/detailed/168/sp-sn0000b060000-nhan-bac-style-by-pnj-1.png', 8);
INSERT INTO jewelry_shop.image (id, image_url, product_id) VALUES (15, 'https://cdn.pnj.io/images/detailed/168/sp-sn0000b060000-nhan-bac-style-by-pnj-2.png', 8);
INSERT INTO jewelry_shop.image (id, image_url, product_id) VALUES (16, 'https://cdn.pnj.io/images/thumbnails/485/485/detailed/188/sp-gbpf00x000011-bong-tai-vang-14k-dinh-ngoc-trai-freshwater-pnj-2.png', 9);
INSERT INTO jewelry_shop.image (id, image_url, product_id) VALUES (17, 'https://cdn.pnj.io/images/detailed/188/on-gbpf00x000011-bong-tai-vang-14k-dinh-ngoc-trai-freshwater-pnj-2.jpg', 9);
INSERT INTO jewelry_shop.image (id, image_url, product_id) VALUES (18, 'https://cdn.pnj.io/images/thumbnails/485/485/detailed/183/sp-cap-nhan-cuoi-vang-trang-14k-dinh-da-saphire-pnj-true-love-00060-00059-2.png', 3);
INSERT INTO jewelry_shop.image (id, image_url, product_id) VALUES (19, 'https://cdn.pnj.io/images/thumbnails/485/485/detailed/171/gndd00w004378-nhan-nam-kim-cuong-vang-14k-diamond-1.png', 4);

-- order_cart


-- order_user


-- order_detail 






