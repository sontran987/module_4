package com.example.jewelry_be.service.search;

import com.example.jewelry_be.model.CategoryProduct;
import com.example.jewelry_be.model.Supplier;
import com.example.jewelry_be.model.TypeProduct;
import com.example.jewelry_be.repository.ICategoryRepository;
import com.example.jewelry_be.repository.ISupplierRepository;
import com.example.jewelry_be.repository.ITypeProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SearchServiceImpl implements ISearchService{
    @Autowired
    private ICategoryRepository categoryRepository;
    @Autowired
    private ISupplierRepository supplierRepository;
    @Autowired
    private ITypeProductRepository typeProductRepository;
    @Override
    public List<CategoryProduct> getAllCategory() {
        return categoryRepository.getAllCategoryProduct();
    }

    @Override
    public List<Supplier> getAllSupplier() {
        return supplierRepository.getAllSupplier();
    }

    @Override
    public List<TypeProduct> getAllTypeProduct() {
        return typeProductRepository.getAllTypeProduct();
    }
}
