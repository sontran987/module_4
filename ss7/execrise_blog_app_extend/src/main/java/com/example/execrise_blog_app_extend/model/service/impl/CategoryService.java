package com.example.execrise_blog_app_extend.model.service.impl;

import com.example.execrise_blog_app_extend.model.model.Blog;
import com.example.execrise_blog_app_extend.model.model.Category;
import com.example.execrise_blog_app_extend.model.repository.ICategoryRepository;
import com.example.execrise_blog_app_extend.model.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service

public class CategoryService implements ICategoryService {
    @Autowired
    ICategoryRepository categoryRepository;
    @Override
    public List<Category> displayCategory() {
        return categoryRepository.findAllByIsFlag();
    }

    @Override
    public void createCategory(Category category) {
        categoryRepository.save(category);
    }

    @Override
    public void editCategory(Category category) {
        categoryRepository.save(category);
    }

    @Override
    public boolean deleteCategory(Category category) {
       categoryRepository.isDelete(category.getId());
        return true;
    }

    @Override
    public Category detailCategory(Integer id) {
        try {
            return categoryRepository.findById(id).get();
        } catch (NoSuchElementException e) {
            return null;
        }
    }


}
