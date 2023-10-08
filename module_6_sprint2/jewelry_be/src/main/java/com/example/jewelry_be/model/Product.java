package com.example.jewelry_be.model;

import javax.persistence.*;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nameProduct;
    private String describeProduct;
    private String price;
    private Boolean flagDeleted;
    @ManyToOne
    private TypeProduct typeProduct;
    @ManyToOne
    private Supplier supplier;

    public Product() {
    }

    public Product(Integer id, String nameProduct, String describeProduct, String price, Boolean flagDeleted, TypeProduct typeProduct, Supplier supplier) {
        this.id = id;
        this.nameProduct = nameProduct;
        this.describeProduct = describeProduct;
        this.price = price;
        this.flagDeleted = flagDeleted;
        this.typeProduct = typeProduct;
        this.supplier = supplier;
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

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public Boolean getFlagDeleted() {
        return flagDeleted;
    }

    public void setFlagDeleted(Boolean flagDeleted) {
        this.flagDeleted = flagDeleted;
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
