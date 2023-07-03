package com.example.execries_restful_app_blog.model.service.impl;

import com.example.execries_restful_app_blog.model.model.Blog;
import com.example.execries_restful_app_blog.model.model.Category;
import com.example.execries_restful_app_blog.model.repository.IBlogRepository;
import com.example.execries_restful_app_blog.model.service.IBlogService;
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

    public Page<Blog> displayBlog(Pageable pageable) {
        return blogRepository.findAll(pageable);
    }

    @Override
    public List<Blog> displayBlog() {
        return blogRepository.findBlogByFlagDeleteFalse();
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
    public Page<Blog> search(Pageable pageable, String name, Category category) {
        return blogRepository.findBlogByTitleContainsOrCategory(name, category, pageable);
    }

    @Override
    public List<Blog> searchBlogName(String name) {
        return blogRepository.findBlogByTitle(name);
    }

    @Override
    public List<Blog> findAllByCategory(Category category) {
        return this.blogRepository.findAllByCategory(category);
    }

}

