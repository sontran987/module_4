package com.example.jewelry_be.model;

import org.springframework.stereotype.Component;

import javax.persistence.*;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nameProduct;
    @Column(columnDefinition = "LONGTEXT")
    private String describeProduct;
        private Integer quantity;
    @Column(columnDefinition = "LONGTEXT")
    private String imageProduct;
    private Double price;
    private Boolean flagDeleted;

    @ManyToOne
    private CategoryProduct categoryProduct;
    @ManyToOne
    private TypeProduct typeProduct;
    @ManyToOne
    private Supplier supplier;

    public Product() {
    }

    public Product(Integer id, String nameProduct, String describeProduct, Integer quantity, String imageProduct, Double price, Boolean flagDeleted, CategoryProduct categoryProduct, TypeProduct typeProduct, Supplier supplier) {
        this.id = id;
        this.nameProduct = nameProduct;
        this.describeProduct = describeProduct;
        this.quantity = quantity;
        this.imageProduct = imageProduct;
        this.price = price;
        this.flagDeleted = flagDeleted;
        this.categoryProduct = categoryProduct;
        this.typeProduct = typeProduct;
        this.supplier = supplier;
    }

    public String getImageProduct() {
        return imageProduct;
    }

    public void setImageProduct(String imageProduct) {
        this.imageProduct = imageProduct;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNameProduct() {
        return nameProduct;
    }

    public void setNameProduct(String nameProduct) {
        this.nameProduct = nameProduct;
    }

    public String getDescribeProduct() {
        return describeProduct;
    }

    public void setDescribeProduct(String describeProduct) {
        this.describeProduct = describeProduct;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Boolean getFlagDeleted() {
        return flagDeleted;
    }

    public void setFlagDeleted(Boolean flagDeleted) {
        this.flagDeleted = flagDeleted;
    }


    public CategoryProduct getCategoryProduct() {
        return categoryProduct;
    }

    public void setCategoryProduct(CategoryProduct categoryProduct) {
        this.categoryProduct = categoryProduct;
    }

    public TypeProduct getTypeProduct() {
        return typeProduct;
    }

    public void setTypeProduct(TypeProduct typeProduct) {
        this.typeProduct = typeProduct;
    }

    public Supplier getSupplier() {
        return supplier;
    }

    public void setSupplier(Supplier supplier) {
        this.supplier = supplier;
    }
}
