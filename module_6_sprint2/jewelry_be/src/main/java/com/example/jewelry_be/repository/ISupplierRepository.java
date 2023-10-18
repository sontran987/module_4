package com.example.jewelry_be.repository;

import com.example.jewelry_be.model.Supplier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ISupplierRepository extends JpaRepository<Supplier,Integer> {
    @Query(value = "SELECT * FROM supplier", nativeQuery = true)
    List<Supplier> getAllSupplier();
}
