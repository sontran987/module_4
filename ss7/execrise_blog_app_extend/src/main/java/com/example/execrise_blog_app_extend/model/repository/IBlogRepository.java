package com.example.execrise_blog_app_extend.model.repository;

import com.example.execrise_blog_app_extend.model.model.Blog;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;

public interface IBlogRepository extends JpaRepository<Blog, Integer> {
    @Query(value = "select * from blog where blog.title like concat('%',:title,'%') or blog.category_id = :id", nativeQuery = true)
    Page<Blog> findByTitle(Pageable pageable, @Param(value = "title") String name, @Param(value = "id") Integer idCategory);

    @Modifying
    @Transactional
    @Query(value = "update blog as b set is_flag_delete = 1 where b.id = :id ", nativeQuery = true)
    void isDelete(@Param(value = "id") Integer id);
}
