package com.example.execrise_blog_app_extend.model.service;

import com.example.execrise_blog_app_extend.model.model.Blog;
import com.example.execrise_blog_app_extend.model.model.Category;

import java.util.List;

public interface ICategoryService {
    List<Category> displayCategory();
    void createCategory(Category category);
    void editCategory(Category category);
    boolean deleteCategory(Category category);
    Category detailCategory(Integer id);
}
