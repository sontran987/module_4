package com.example.execrise_blog_appp.model.service.impl;

import com.example.execrise_blog_appp.model.model.Blog;
import com.example.execrise_blog_appp.model.repository.IBlogRepository;
import com.example.execrise_blog_appp.model.service.IBlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class BlogServiceImpl implements IBlogService {
    @Autowired
    private IBlogRepository blogRepository;

    @Override
    public List<Blog> displayBlog() {
        return blogRepository.findAll();
    }

    @Override
    public void createBlog(Blog blog) {
        blogRepository.save(blog);
    }

    @Override
    public void editBlog(Blog blog) {
        blogRepository.save(blog);
    }

    @Override
    public Blog detailBlog(Integer id) {
        try {
            return blogRepository.findById(id).get();
        } catch (NoSuchElementException e) {
            return null;
        }

    }

    @Override
    public boolean deleteBlog(Blog blog) {
        blogRepository.delete(blog);
        return true;
    }
}
