package com.example.jewelry_be.service.product;

import com.example.jewelry_be.model.Product;
import com.example.jewelry_be.model.Size;
import com.example.jewelry_be.projection.DetailProductProjection;
import com.example.jewelry_be.projection.ListProductProjection;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IProductService {
    Page<ListProductProjection> getAllProduct(Pageable pageable, Integer trademark, Integer material, Integer typeProduct);
    Page<ListProductProjection> getAll(Pageable pageable);
    DetailProductProjection findProductById(Integer id);
    List<Size> getAllSize();
    List<Product> getAllProduct();
    boolean addProduct(Product product);
    boolean editProduct(Product product);

}
