package com.example.execrise_blog_app_extend.model.service.impl;

import com.example.execrise_blog_app_extend.model.model.Category;
import com.example.execrise_blog_app_extend.model.repository.ICategoryRepository;
import com.example.execrise_blog_app_extend.model.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service

public class CategoryService implements ICategoryService {
    @Autowired
    ICategoryRepository categoryRepository;
    @Override
    public List<Category> displayCategory() {
        return categoryRepository.findAllByIsFlag();
    }
}
