package com.example.jewelry_be.repository;

import com.example.jewelry_be.model.CategoryProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ICategoryRepository extends JpaRepository<CategoryProduct,Integer> {
    @Query(value = "SELECT * FROM category_product",nativeQuery = true)
    List<CategoryProduct> getAllCategoryProduct();
}
