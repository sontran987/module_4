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
create TABLE product(
id int PRIMARY KEY AUTO_INCREMENT,
name_product VARCHAR(50) NOT NULL ,
describe_product VARCHAR(100),
price VARCHAR(20) NOT NULL ,
flag_deleted bit(1),
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
order_user_id int , FOREIGN KEY(order_user_id) REFERENCES order_user(id),
product_id int ,FOREIGN KEY(product_id) REFERENCES product(id)
);
create TABLE order_cart(
id int PRIMARY KEY AUTO_INCREMENT ,
quantity int ,
flag_deleted bit(1) ,
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
INSERT INTO jewelry_shop.type_product (id, name_type_product) VALUES (1, 'Ring ');
INSERT INTO jewelry_shop.type_product (id, name_type_product) VALUES (2, 'Signet ring ');
INSERT INTO jewelry_shop.type_product (id, name_type_product) VALUES (3, 'Wedding ring');
INSERT INTO jewelry_shop.type_product (id, name_type_product) VALUES (4, 'Bangle ');
INSERT INTO jewelry_shop.type_product (id, name_type_product) VALUES (5, 'Bracelet ');
INSERT INTO jewelry_shop.type_product (id, name_type_product) VALUES (6, 'Strand of beads');
INSERT INTO jewelry_shop.type_product (id, name_type_product) VALUES (7, 'Drop earrings');
INSERT INTO jewelry_shop.type_product (id, name_type_product) VALUES (8, 'Watch ');
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
-- product
insert into product (id, describe_product, name_product, price, flag_deleted, supplier_id, type_product_id) values (1, 'Darya Causey', 'Eleanore Shellibeer', 5821025, false, 1, 7);
insert into product (id, describe_product, name_product, price, flag_deleted, supplier_id, type_product_id) values (2, 'Carlyle Cartmel', 'Dorthea Dunkerly', 5705853, true, 7, 6);
insert into product (id, describe_product, name_product, price, flag_deleted, supplier_id, type_product_id) values (3, 'Tamqrah Loveard', 'Nola Rodrig', 7402110, true, 4, 5);
insert into product (id, describe_product, name_product, price, flag_deleted, supplier_id, type_product_id) values (4, 'Mile Day', 'Neils Wenman', 7657501, true, 6, 5);
insert into product (id, describe_product, name_product, price, flag_deleted, supplier_id, type_product_id) values (5, 'Susannah Barnett', 'Maison Gillyett', 5711999, true, 1, 6);
insert into product (id, describe_product, name_product, price, flag_deleted, supplier_id, type_product_id) values (6, 'Roselin Brundall', 'Cory Manifould', 5182518, true, 1, 2);
insert into product (id, describe_product, name_product, price, flag_deleted, supplier_id, type_product_id) values (7, 'Ardelis Thorpe', 'Arlette Simla', 5765004, true, 3, 2);
insert into product (id, describe_product, name_product, price, flag_deleted, supplier_id, type_product_id) values (8, 'Felix Belvin', 'Bradford Averay', 1842893, false, 9, 2);
insert into product (id, describe_product, name_product, price, flag_deleted, supplier_id, type_product_id) values (9, 'Katleen Freshwater', 'Farand Entissle', 1520114, true, 3, 3);
insert into product (id, describe_product, name_product, price, flag_deleted, supplier_id, type_product_id) values (10, 'Cazzie Mc Queen', 'Tom Born', 7159135, false, 3, 8);

-- image
insert into image (id, image_url, product_id) values (1, 'http://dummyimage.com/121x100.png/cc0000/ffffff', 9);
insert into image (id, image_url, product_id) values (2, 'http://dummyimage.com/109x100.png/ff4444/ffffff', 10);
insert into image (id, image_url, product_id) values (3, 'http://dummyimage.com/177x100.png/cc0000/ffffff', 8);
insert into image (id, image_url, product_id) values (4, 'http://dummyimage.com/245x100.png/ff4444/ffffff', 1);
insert into image (id, image_url, product_id) values (5, 'http://dummyimage.com/128x100.png/5fa2dd/ffffff', 4);
insert into image (id, image_url, product_id) values (6, 'http://dummyimage.com/166x100.png/ff4444/ffffff', 9);
insert into image (id, image_url, product_id) values (7, 'http://dummyimage.com/103x100.png/dddddd/000000', 2);
insert into image (id, image_url, product_id) values (8, 'http://dummyimage.com/212x100.png/ff4444/ffffff', 1);
insert into image (id, image_url, product_id) values (9, 'http://dummyimage.com/134x100.png/5fa2dd/ffffff', 8);
insert into image (id, image_url, product_id) values (10, 'http://dummyimage.com/167x100.png/5fa2dd/ffffff', 9);
insert into image (id, image_url, product_id) values (11, 'http://dummyimage.com/172x100.png/cc0000/ffffff', 7);
insert into image (id, image_url, product_id) values (12, 'http://dummyimage.com/181x100.png/ff4444/ffffff', 3);
insert into image (id, image_url, product_id) values (13, 'http://dummyimage.com/228x100.png/cc0000/ffffff', 5);
insert into image (id, image_url, product_id) values (14, 'http://dummyimage.com/140x100.png/cc0000/ffffff', 6);
insert into image (id, image_url, product_id) values (15, 'http://dummyimage.com/131x100.png/cc0000/ffffff', 6);
-- order_cart
insert into order_cart (id, quantity, flag_deleted, product_id, user_information_id) values (1, 5, false, 1, 10);
insert into order_cart (id, quantity, flag_deleted, product_id, user_information_id) values (2, 3, true, 2, 2);
insert into order_cart (id, quantity, flag_deleted, product_id, user_information_id) values (3, 2, true, 3, 1);
insert into order_cart (id, quantity, flag_deleted, product_id, user_information_id) values (4, 6, false, 4, 5);
insert into order_cart (id, quantity, flag_deleted, product_id, user_information_id) values (5, 5, false, 5, 10);
insert into order_cart (id, quantity, flag_deleted, product_id, user_information_id) values (6, 1, false, 6, 6);
insert into order_cart (id, quantity, flag_deleted, product_id, user_information_id) values (7, 5, true, 7,1);
insert into order_cart (id, quantity, flag_deleted, product_id, user_information_id) values (8, 1, false, 8, 2);
insert into order_cart (id, quantity, flag_deleted, product_id, user_information_id) values (9, 7, true, 9, 6);
insert into order_cart (id, quantity, flag_deleted, product_id, user_information_id) values (10, 4, true, 10, 9);
-- order_user
insert into order_user (id, order_date, flag_deleted, note, user_information_id) values (1, 6, false, 6, 1);
insert into order_user (id, order_date, flag_deleted, note, user_information_id) values (2, 9, true, 3, 2);
insert into order_user (id, order_date, flag_deleted, note, user_information_id) values (3, 7, true, 3, 3);
insert into order_user (id, order_date, flag_deleted, note, user_information_id) values (4, 6, false, 8, 4);
insert into order_user (id, order_date, flag_deleted, note, user_information_id) values (5, 1, true, 6, 5);
insert into order_user (id, order_date, flag_deleted, note, user_information_id) values (6, 5, false, 10, 6);
insert into order_user (id, order_date, flag_deleted, note, user_information_id) values (7, 8, true, 2, 7);
insert into order_user (id, order_date, flag_deleted, note, user_information_id) values (8, 8, true, 1, 8);
insert into order_user (id, order_date, flag_deleted, note, user_information_id) values (9, 3, true, 2, 9);
insert into order_user (id, order_date, flag_deleted, note, user_information_id) values (10, 10, false, 1, 10);

-- order_detail 
insert into order_detail (id, quantity, flag_deleted, product_id, order_user_id, price) values (1, 10, false, 5, 1, 64367304);
insert into order_detail (id, quantity, flag_deleted, product_id, order_user_id, price) values (2, 6, false, 1, 2, 84983408);
insert into order_detail (id, quantity, flag_deleted, product_id, order_user_id, price) values (3, 9, false, 7, 3, 74481284);
insert into order_detail (id, quantity, flag_deleted, product_id, order_user_id, price) values (4, 6, false, 5, 4, 73283678);
insert into order_detail (id, quantity, flag_deleted, product_id, order_user_id, price) values (5, 1, false, 3, 5, 63204708);
insert into order_detail (id, quantity, flag_deleted, product_id, order_user_id, price) values (6, 10, false, 8, 6, 80009136);
insert into order_detail (id, quantity, flag_deleted, product_id, order_user_id, price) values (7, 6, false, 8, 7, 85697137);
insert into order_detail (id, quantity, flag_deleted, product_id, order_user_id, price) values (8, 7, false, 10, 8, 36594062);
insert into order_detail (id, quantity, flag_deleted, product_id, order_user_id, price) values (9, 7, false, 8, 9, 43487433);
insert into order_detail (id, quantity, flag_deleted, product_id, order_user_id, price) values (10, 2, false, 3, 10, 23321494);






