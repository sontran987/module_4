package com.example.execrise_blog_appp.model.repository;

import com.example.execrise_blog_appp.model.model.Blog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IBlogRepository extends JpaRepository<Blog,Integer> {

}
