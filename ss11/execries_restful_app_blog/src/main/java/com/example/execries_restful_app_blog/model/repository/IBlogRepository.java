package com.example.execries_restful_app_blog.model.repository;

import com.example.execries_restful_app_blog.model.model.Blog;
import com.example.execries_restful_app_blog.model.model.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface IBlogRepository extends JpaRepository<Blog, Integer> {
//    @Query(value = "select * from blog where blog.title like concat('%',:title,'%') or blog.category_id = :id", nativeQuery = true)
//    Page<Blog> findByTitle(Pageable pageable, @Param(value = "title") String name, @Param(value = "id") Integer idCategory);
    Page<Blog> findBlogByTitleContainsOrCategory(String title, Category category , Pageable pageable );
    @Query(value = "SELECT * FROM blog as b WHERE b.title like concat('%',:title,'%')", nativeQuery = true)
    List<Blog> findBlogByTitle(@Param(value = "title") String title);
    List<Blog> findBlogByFlagDeleteFalse();
    @Modifying
    @Transactional
    @Query(value = "update blog as b set is_flag_delete = 1 where b.id = :id ", nativeQuery = true)
    void isDelete(@Param(value = "id") Integer id);

    List<Blog> findAllByCategory(Category category);
}
