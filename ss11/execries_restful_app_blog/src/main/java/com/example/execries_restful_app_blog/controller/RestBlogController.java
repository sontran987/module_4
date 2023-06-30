package com.example.execries_restful_app_blog.controller;

import com.example.execries_restful_app_blog.model.model.Blog;
import com.example.execries_restful_app_blog.model.model.Category;
import com.example.execries_restful_app_blog.model.service.IBlogService;
import com.example.execries_restful_app_blog.model.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RestBlogController {
    @Autowired
    private IBlogService blogService;
    @Autowired
    private ICategoryService categoryService;

    @GetMapping("/blog")
    public ResponseEntity<List<Blog>> getBlog() {
        return new ResponseEntity<>(this.blogService.displayBlog(),HttpStatus.OK);
    }

    @GetMapping("/categorys")
    public ResponseEntity<List<Category>>  getCategory() {
        return new ResponseEntity<>(this.categoryService.displayCategory(),HttpStatus.OK);
    }

    @GetMapping("/category/{id}")
    public ResponseEntity<List<Blog>> getBlogByCategory(@PathVariable Integer id) {
        if (categoryService.detailCategory(id) == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(this.blogService.findAllByCategory(categoryService.detailCategory(id)),HttpStatus.OK);
    }

    @GetMapping("/blog/{id}")
    public ResponseEntity<Blog> getBlogById(@PathVariable Integer id) {
        if (blogService.detailBlog(id)==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>( this.blogService.detailBlog(id),HttpStatus.OK);
    }

    @PostMapping("/blog/add")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<?> create(@RequestBody Category category){
        if (categoryService.detailCategory(category.getId())==null){
            this.categoryService.createCategory(category);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

}
