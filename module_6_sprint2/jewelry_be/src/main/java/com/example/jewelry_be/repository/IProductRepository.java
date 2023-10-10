package com.example.jewelry_be.repository;


import com.example.jewelry_be.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface IProductRepository extends JpaRepository<Product, Integer> {
//    @Query()
//    Page<Product> findAllProduct();

}
