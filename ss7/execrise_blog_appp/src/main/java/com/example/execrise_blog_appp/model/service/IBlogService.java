package com.example.execrise_blog_appp.model.service;

import com.example.execrise_blog_appp.model.model.Blog;

import java.util.List;

public interface IBlogService {
    List<Blog> displayBlog();
    void createBlog(Blog blog);
    void editBlog(Blog blog);
    Blog detailBlog(Integer id);
    boolean deleteBlog(Blog blog);
 }
