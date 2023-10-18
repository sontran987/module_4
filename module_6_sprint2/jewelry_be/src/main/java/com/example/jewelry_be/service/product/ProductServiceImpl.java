package com.example.jewelry_be.service.product;

import com.example.jewelry_be.model.Product;
import com.example.jewelry_be.model.Size;
import com.example.jewelry_be.projection.DetailProductProjection;
import com.example.jewelry_be.repository.IProductRepository;
import com.example.jewelry_be.repository.ISizeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements IProductService {
    @Autowired
    private IProductRepository productRepository;
    @Autowired
    private ISizeRepository sizeRepository;
    @Override
    public Page<Product> getAllProduct(Pageable pageable, Integer trademark, Integer material, Integer typeProduct) {
        return productRepository.findAllProduct(pageable,trademark,material,typeProduct);
    }

    @Override
    public Page<Product> getAll(Pageable pageable) {
        return productRepository.findAll(pageable);
    }

    @Override
    public DetailProductProjection findProductById(Integer id) {
        try{
            return productRepository.findProductById(id);
        }catch (Exception e){
            return  null;
        }
    }

    @Override
    public List<Size> getAllSize() {
        return sizeRepository.findAll();
    }

    @Override
    public boolean addProduct(Product product) {
        return false;
    }

    @Override
    public boolean editProduct(Product product) {
        return false;
    }
}
