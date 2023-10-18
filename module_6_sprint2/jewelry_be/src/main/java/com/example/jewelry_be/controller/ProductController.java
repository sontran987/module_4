package com.example.jewelry_be.controller;

import com.example.jewelry_be.model.*;
import com.example.jewelry_be.projection.DetailProductProjection;
import com.example.jewelry_be.service.product.IProductService;
import com.example.jewelry_be.service.search.ISearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.xml.soap.Detail;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/product")
public class ProductController {
    @Autowired
    private IProductService productService;
    @Autowired
    private ISearchService searchService;

    @GetMapping("/get-all")
    public ResponseEntity<Page<Product>> getAllProduct(
            @RequestParam(value = "page", required = false) Integer page,
            @RequestParam(value = "limit", required = false) Integer limit,
            @RequestParam(value = "sort", required = false) String sort,
            @RequestParam(value = "arrangement", required = false) Integer arrangement,
            @RequestParam(value = "trademark", required = false) Integer trademark,
            @RequestParam(value = "material", required = false) Integer material,
            @RequestParam(value = "typeProduct", required = false) Integer typeProduct) {
        Pageable pageable;
        Page<Product> list;
        if (trademark == null) {
            trademark = 0;
        }
        if (material == null) {
            material = 0;
        }
        if (typeProduct == null) {
            typeProduct = 0;
        }
        switch (arrangement) {
            case 0:
                pageable = PageRequest.of(page, limit, Sort.by((Sort.Direction.ASC), sort));
                break;
            default:
                pageable = PageRequest.of(page, limit, Sort.by((Sort.Direction.DESC), sort));
                break;
        }
        try {
            if (trademark == 0 && material == 0 && typeProduct == 0) {
                list = productService.getAll(pageable);
                return new ResponseEntity<>(list, HttpStatus.OK);
            } else {
                list = productService.getAllProduct(pageable, trademark, material, typeProduct);
                return new ResponseEntity<>(list, HttpStatus.OK);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }

    @GetMapping("get-category")
    public ResponseEntity<List<CategoryProduct>> getSearchCategory() {
        List<CategoryProduct> categoryProductList = searchService.getAllCategory();
        return new ResponseEntity<>(categoryProductList, HttpStatus.OK);
    }

    @GetMapping("get-supplier")
    public ResponseEntity<List<Supplier>> getSearchSupplier() {
        List<Supplier> supplierList = searchService.getAllSupplier();
        return new ResponseEntity<>(supplierList, HttpStatus.OK);
    }

    @GetMapping("get-type-product")
    public ResponseEntity<List<TypeProduct>> getSearchTypeProduct() {
        List<TypeProduct> typeProductList = searchService.getAllTypeProduct();
        return new ResponseEntity<>(typeProductList, HttpStatus.OK);
    }

    @GetMapping("/get-detail-product")
    public ResponseEntity<DetailProductProjection> detailProductById(@RequestParam(value = "id")Integer id) {
        DetailProductProjection detailProductProjection = productService.findProductById(id);
        if ( detailProductProjection == null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }else {
            return new ResponseEntity<>(detailProductProjection,HttpStatus.OK);
        }
    }
    @GetMapping("get-size")
    public ResponseEntity<List<Size>> getAllSize(){
       List<Size> sizeList = productService.getAllSize();
       return new ResponseEntity<>(sizeList, HttpStatus.OK);
    }
}
