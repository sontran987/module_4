package com.example.complete_shopping_cart.model.repository;

import com.example.complete_shopping_cart.model.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ICartRepository extends JpaRepository<Cart,Integer> {
    List<Cart> findCartByProductId(Integer id);
}
