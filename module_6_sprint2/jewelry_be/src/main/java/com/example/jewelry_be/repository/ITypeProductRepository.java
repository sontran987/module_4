package com.example.jewelry_be.repository;

import com.example.jewelry_be.model.TypeProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ITypeProductRepository extends JpaRepository<TypeProduct,Integer> {
    @Query(value = "SELECT * FROM type_product", nativeQuery = true)
    List<TypeProduct> getAllTypeProduct();
}
