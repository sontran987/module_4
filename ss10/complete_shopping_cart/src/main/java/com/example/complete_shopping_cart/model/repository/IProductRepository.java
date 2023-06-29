package com.example.complete_shopping_cart.model.repository;

import com.example.complete_shopping_cart.model.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IProductRepository extends JpaRepository<Product,Integer> {

}
