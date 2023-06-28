package com.example.app_borrow_books.model.repository;

import com.example.app_borrow_books.model.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.persistence.criteria.CriteriaBuilder;
import javax.transaction.Transactional;

public interface IBookRepository extends JpaRepository<Book,Integer> {
    @Modifying
    @Transactional
    @Query(value = "update song as s set is_flag_delete = 1 where s.id = :id ", nativeQuery = true)
    void isDelete(@Param(value = "id") Integer id);
}
