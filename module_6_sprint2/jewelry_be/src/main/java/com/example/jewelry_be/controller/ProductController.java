package com.example.jewelry_be.controller;

import com.example.jewelry_be.model.Product;
import com.example.jewelry_be.service.product.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/product")
public class ProductController {
    @Autowired
    private IProductService productService;

    @GetMapping("/get-all")
    public ResponseEntity<Page<Product>> getAllProduct(@RequestParam(value = "page", required = false) Integer page,
                                                       @RequestParam(value = "limit", required = false) Integer limit,
                                                       @RequestParam(value = "sort", required = false) String sort,
                                                       @RequestParam(value = "arrangement",required = false) Integer arrangement,
                                                       @RequestParam(value = "trademark", required = false) Integer trademark,
                                                       @RequestParam(value = "material", required = false) Integer material,
                                                       @RequestParam(value = "typeProduct", required = false) Integer typeProduct) {
        Pageable pageable ;
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
        switch (arrangement){
            case 0:
                pageable = PageRequest.of(page, limit, Sort.by((Sort.Direction.ASC), sort));
                break;
            default:
                pageable = PageRequest.of(page, limit, Sort.by((Sort.Direction.DESC), sort));
                break;
        }
        try{
            if (trademark == 0 && material == 0 && typeProduct == 0) {
                list = productService.getAll(pageable);
                return new ResponseEntity<>(list, HttpStatus.OK);
            } else {
                list = productService.getAllProduct(pageable, trademark, material, typeProduct);
                return new ResponseEntity<>(list, HttpStatus.OK);
            }
        }catch(Exception e){
         return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }

}
