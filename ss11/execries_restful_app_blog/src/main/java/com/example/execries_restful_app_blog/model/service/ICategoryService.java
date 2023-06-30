package com.example.execries_restful_app_blog.model.service;

import com.example.execries_restful_app_blog.model.model.Category;

import java.util.List;

public interface ICategoryService {
    List<Category> displayCategory();
    void createCategory(Category category);
    void editCategory(Category category);
    boolean deleteCategory(Category category);
    Category detailCategory(Integer id);
}
