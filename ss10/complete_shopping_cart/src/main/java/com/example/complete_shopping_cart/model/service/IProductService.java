package com.example.complete_shopping_cart.model.service;

import com.example.complete_shopping_cart.model.model.Cart;
import com.example.complete_shopping_cart.model.model.Product;

import java.util.List;

public interface IProductService {
    List<Product> findAll();
    Product findById(int id);
    boolean checkCart(Integer id);
    List<Cart> findAllCart();
}
