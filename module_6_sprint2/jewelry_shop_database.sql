create DATABASE jewelry_shop;
use jewelry_shop;
create TABLE role_user(
id int PRIMARY KEY AUTO_INCREMENT,
name_role VARCHAR(50)
);
create TABLE account_user(
id int PRIMARY KEY AUTO_INCREMENT,
user_name VARCHAR(50) NOT NULL,
user_passwork VARCHAR(50) NOT NULL,
flag_deleted bit(1),
role_user_id int , FOREIGN KEY(role_user_id) REFERENCES role_user(id)
);
create TABLE user_information(
id int PRIMARY KEY AUTO_INCREMENT,
name_user VARCHAR(50) ,
email VARCHAR(50) ,
birthday VARCHAR(50) ,
id_card VARCHAR(50) ,
flag_delete bit(1),
account_user_id int , FOREIGN KEY(account_user_id) REFERENCES account_user(id)
);
create TABLE type_product(
id int PRIMARY KEY AUTO_INCREMENT,
name_type_product VARCHAR(50) 
);
create TABLE product(
id int PRIMARY KEY AUTO_INCREMENT,
name_product VARCHAR(50) ,
price DOUBLE ,
quantity_product int NOT NULL,
type_product_id int , FOREIGN KEY(type_product_id) REFERENCES type_product(id)
);
create TABLE order_user (
id int PRIMARY KEY AUTO_INCREMENT,
order_date VARCHAR(50) ,
user_information_id int , FOREIGN KEY(user_information_id) REFERENCES user_information(id)
);
create TABLE order_detail(
id int PRIMARY KEY AUTO_INCREMENT ,
quantity int ,
order_user_id int , FOREIGN KEY(order_user_id) REFERENCES order_user(id),
product_id int ,FOREIGN KEY(product_id) REFERENCES product(id)
);






