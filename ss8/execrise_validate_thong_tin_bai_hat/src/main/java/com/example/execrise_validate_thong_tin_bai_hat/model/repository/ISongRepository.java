package com.example.execrise_validate_thong_tin_bai_hat.model.repository;

import com.example.execrise_validate_thong_tin_bai_hat.model.model.Song;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;

public interface ISongRepository extends JpaRepository<Song,Integer> {
    @Modifying
    @Transactional
    @Query(value = "update song as s set is_flag_delete = 1 where s.id = :id ", nativeQuery = true)
    void isDelete(@Param(value = "id") Integer id);
}
