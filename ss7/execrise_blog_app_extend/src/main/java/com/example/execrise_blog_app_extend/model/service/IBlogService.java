package com.example.execrise_blog_app_extend.model.service;

import com.example.execrise_blog_app_extend.model.model.Blog;
import com.example.execrise_blog_app_extend.model.model.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IBlogService {
    Page<Blog> displayBlog(Pageable pageable);

    void createBlog(Blog blog);
    void editBlog(Blog blog);
    Blog detailBlog(Integer id);
    boolean deleteBlog(Blog blog);
    Page<Blog> search(Pageable pageable,String name, Category category);
}