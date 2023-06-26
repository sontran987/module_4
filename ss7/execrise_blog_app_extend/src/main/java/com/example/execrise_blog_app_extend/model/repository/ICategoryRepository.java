package com.example.execrise_blog_app_extend.model.repository;

import com.example.execrise_blog_app_extend.model.model.Blog;
import com.example.execrise_blog_app_extend.model.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface ICategoryRepository extends JpaRepository<Category,Integer> {
    @Query(value = "select * from category as c where c.is_flag_delete = 0 ", nativeQuery = true)
    List<Category> findAllByIsFlag();
    @Modifying
    @Transactional
    @Query(value = "update category as c set is_flag_delete = 1 where c.id = :id ", nativeQuery = true)
    void isDelete(@Param(value = "id") Integer id);
}
