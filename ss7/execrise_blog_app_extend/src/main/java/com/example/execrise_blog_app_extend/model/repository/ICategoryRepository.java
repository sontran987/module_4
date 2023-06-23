package com.example.execrise_blog_app_extend.model.repository;

import com.example.execrise_blog_app_extend.model.model.Blog;
import com.example.execrise_blog_app_extend.model.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ICategoryRepository extends JpaRepository<Category,Integer> {
    @Query(value = "select * from category as c where c.is_flag_delete = 0 ", nativeQuery = true)
    List<Category> findAllByIsFlag();
}
