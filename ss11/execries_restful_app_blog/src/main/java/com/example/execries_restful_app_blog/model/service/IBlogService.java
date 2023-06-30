package com.example.execries_restful_app_blog.model.service;

import com.example.execries_restful_app_blog.model.model.Blog;
import com.example.execries_restful_app_blog.model.model.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IBlogService {
    Page<Blog> displayBlog(Pageable pageable);
    List<Blog> displayBlog();
    void createBlog(Blog blog);
    void editBlog(Blog blog);
    Blog detailBlog(Integer id);
    boolean deleteBlog(Blog blog);
    Page<Blog> search(Pageable pageable,String name, Category category);
    List<Blog> findAllByCategory(Category category);
}