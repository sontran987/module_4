package com.example.execrise_blog_app_extend.model.model;

import javax.persistence.*;

@Entity
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "name_category", nullable = false)
    private String nameCategory;
    @Column(name = "is_flag_delete", nullable = false, columnDefinition = "bit default 0")
    private boolean isFlagDelete;


    public Category() {
    }

    public Category(Integer id, String nameCategory, boolean isFlagDelete) {
        this.id = id;
        this.nameCategory = nameCategory;
        this.isFlagDelete = isFlagDelete;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNameCategory() {
        return nameCategory;
    }

    public void setNameCategory(String nameCategory) {
        this.nameCategory = nameCategory;
    }

    public boolean isFlagDelete() {
        return isFlagDelete;
    }

    public void setFlagDelete(boolean flagDelete) {
        isFlagDelete = flagDelete;
    }
}
