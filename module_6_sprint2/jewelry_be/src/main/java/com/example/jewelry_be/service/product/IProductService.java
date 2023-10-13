package com.example.jewelry_be.service.product;

import com.example.jewelry_be.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IProductService {
    Page<Product> getAllProduct(Pageable pageable, Integer trademark,Integer material, Integer typeProduct);
    Page<Product> getAll(Pageable pageable);
    boolean addProduct(Product product);
    boolean editProduct(Product product);

}
