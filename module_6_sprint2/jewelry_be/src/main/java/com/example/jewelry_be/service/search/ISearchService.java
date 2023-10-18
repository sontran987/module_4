package com.example.jewelry_be.service.search;

import com.example.jewelry_be.model.CategoryProduct;
import com.example.jewelry_be.model.Supplier;
import com.example.jewelry_be.model.TypeProduct;

import java.util.List;

public interface ISearchService {
    List<CategoryProduct> getAllCategory();
    List<Supplier> getAllSupplier();
    List<TypeProduct> getAllTypeProduct();
}
