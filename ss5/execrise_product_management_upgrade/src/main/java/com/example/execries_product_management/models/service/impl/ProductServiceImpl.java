package com.example.execries_product_management.models.service.impl;

import com.example.execries_product_management.models.model.Product;
import com.example.execries_product_management.models.repository.IProductRepository;
import com.example.execries_product_management.models.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ProductServiceImpl implements IProductService {
    @Autowired
    private IProductRepository productRepository;

    @Override
    public List<Product> display() {
        return productRepository.display();
    }

    @Override
    public boolean addProduct(Product product) {

        return productRepository.addProduct(product);
    }

    @Override
    public boolean editProduct(Product product) {
        return productRepository.editProduct(product);
    }

    @Override
    public boolean deleteProduct(int id) {
        return productRepository.deleteProduct(id);
    }

    @Override
    public Product getProductById(int id) {
        return productRepository.getProductById(id);
    }

    @Override
    public List<Product> searchProduct(String name) {
        return productRepository.searchProduct(name);
    }
}
