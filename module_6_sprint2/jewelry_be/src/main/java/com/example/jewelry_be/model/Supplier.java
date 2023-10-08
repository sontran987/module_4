package com.example.jewelry_be.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Supplier {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nameSupplier;

    public Supplier() {
    }

    public Supplier(Integer id, String nameSupplier) {
        this.id = id;
        this.nameSupplier = nameSupplier;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNameSupplier() {
        return nameSupplier;
    }

    public void setNameSupplier(String nameProducer) {
        this.nameSupplier = nameProducer;
    }
}
