package com.example.jewelry_be.service.product;

import com.example.jewelry_be.model.Product;
import com.example.jewelry_be.repository.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ProductServiceImpl implements IProductService {
    @Autowired
    private IProductRepository productRepository;
    @Override
    public Page<Product> getAllProduct(Pageable pageable, Integer trademark, Integer material, Integer typeProduct) {
        return productRepository.findAllProduct(pageable,trademark,material,typeProduct);
    }

    @Override
    public Page<Product> getAll(Pageable pageable) {
        return productRepository.findAll(pageable);
    }

    @Override
    public boolean addProduct(Product product) {
        return false;
    }

    @Override
    public boolean editProduct(Product product) {
        return false;
    }
}
