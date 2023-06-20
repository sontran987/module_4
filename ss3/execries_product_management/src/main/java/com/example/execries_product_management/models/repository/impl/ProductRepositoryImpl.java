package com.example.execries_product_management.models.repository.impl;

import com.example.execries_product_management.models.model.Product;
import com.example.execries_product_management.models.repository.IProductRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
@Repository
public class ProductRepositoryImpl implements IProductRepository {
    private static List<Product> productList = new ArrayList<>();
    static {
        productList.add(new Product(1,"Iphone5",1202,"iPhone 5 12GB, cap USB-C sang Lightning","cong ty Thietquan"));
        productList.add(new Product(2,"Iphone6",2134,"iPhone 6 36GB, cap USB-C sang Lightning","cong ty Thietquan"));
        productList.add(new Product(3,"Iphone7",24423,"iPhone 7 128GB, cap USB-C sang Lightning","cong ty Thietquan"));
        productList.add(new Product(4,"Iphone8",23467,"iPhone 8 526GB, cap USB-C sang Lightning","cong ty Thietquan"));
        productList.add(new Product(5,"Iphone9",454545,"iPhone 9 128GB, cap USB-C sang Lightning","cong ty Thietquan"));
        productList.add(new Product(6,"Iphone18",897817,"iPhone 18 128GB, cap USB-C sang Lightning","cong ty Thietquan"));

    }
    @Override
    public List<Product> display() {
        return productList;
    }

    @Override
    public boolean addProduct(Product product) {
        product.setId(productList.size()+1);
        productList.add(product);
        return true;
    }

    @Override
    public boolean editProduct(Product product) {
        for (int i = 0; i < productList.size(); i++) {
            if (productList.get(i).getId()== product.getId()){
                productList.set(i,product);
            }
        }
        return true;
    }

    @Override
    public boolean deleteProduct(int id) {
        for (int i = 0; i < productList.size(); i++) {
            if (productList.get(i).getId()== id){
                productList.remove(i);
            }
        }
        return true;
    }

    @Override
    public Product getProductById(int id) {
        Product product = null;
        for (int i = 0; i < productList.size(); i++) {
            if (productList.get(i).getId()== id){
                product = productList.get(i);
            }
        }
        return product;
    }

    @Override
    public List<Product> searchProduct(String name) {
        List<Product> list = new ArrayList<>();
        for (int i = 0; i < productList.size(); i++) {
            if (productList.get(i).getName().contains(name)){
                list.add(productList.get(i));
            }
        }
        return list;
    }
}
