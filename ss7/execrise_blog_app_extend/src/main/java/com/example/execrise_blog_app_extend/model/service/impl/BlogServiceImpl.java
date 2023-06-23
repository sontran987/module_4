package com.example.execrise_blog_app_extend.model.service.impl;

import com.example.execrise_blog_app_extend.model.model.Blog;
import com.example.execrise_blog_app_extend.model.repository.IBlogRepository;
import com.example.execrise_blog_app_extend.model.service.IBlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class BlogServiceImpl implements IBlogService {
    @Autowired
    private IBlogRepository blogRepository;

    @Override
    public Page<Blog> displayBlog(Pageable pageable) {
        return blogRepository.findAll(pageable);
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
        blogRepository.isDelete(blog.getId());
        return true;
    }

    @Override
    public Page<Blog> search(Pageable pageable, String name, Integer idCategory) {
        return blogRepository.findByTitle(pageable,name,idCategory);
    }
}

