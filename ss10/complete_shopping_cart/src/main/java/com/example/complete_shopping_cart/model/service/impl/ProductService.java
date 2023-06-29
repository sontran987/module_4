package com.example.complete_shopping_cart.model.service.impl;

import com.example.complete_shopping_cart.model.model.Cart;
import com.example.complete_shopping_cart.model.model.Product;
import com.example.complete_shopping_cart.model.repository.ICartRepository;
import com.example.complete_shopping_cart.model.repository.IProductRepository;
import com.example.complete_shopping_cart.model.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedHashMap;
import java.util.List;

@Service
public class ProductService implements IProductService {

    @Autowired
    private IProductRepository productRepository;
    @Autowired
    private ICartRepository cartRepository;

    @Override
    public List<Product> findAll() {
        return productRepository.findAll();
    }

    @Override
    public Product findById(int id) {
        try{
            return productRepository.findById(id).get();
        }catch (Exception ex){
            return null;
        }
    }

    @Override
    public boolean checkCart(Integer id) {

        return false;
    }

    @Override
    public List<Cart> findAllCart() {
        return cartRepository.findAll();
    }
}
