package com.example.execries_product_management.models.repository;

import com.example.execries_product_management.models.model.Product;

import java.util.List;

public interface IProductRepository {
    List<Product> display();
    boolean addProduct(Product product);
    boolean editProduct(Product product);
    boolean deleteProduct(int id);
    Product getProductById(int id);
    List<Product> searchProduct(String name);
}
