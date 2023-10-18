package com.example.jewelry_be.service.product;

import com.example.jewelry_be.model.Product;
import com.example.jewelry_be.model.Size;
import com.example.jewelry_be.projection.DetailProductProjection;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IProductService {
    Page<Product> getAllProduct(Pageable pageable, Integer trademark,Integer material, Integer typeProduct);
    Page<Product> getAll(Pageable pageable);
    DetailProductProjection findProductById(Integer id);
    List<Size> getAllSize();
    boolean addProduct(Product product);
    boolean editProduct(Product product);

}
