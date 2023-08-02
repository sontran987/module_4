package com.example.bai_thi.repository;

import com.example.bai_thi.model.Music;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface IMusicRepository extends JpaRepository<Music, Integer> {
    @Query(value = "select * from music ", nativeQuery = true)
    Page<Music> getMusic(Pageable pageable);
    @Modifying
    @Transactional
    @Query(value = "INSERT INTO music (musician, name_music, number_of_favorites, play_time, singer, status_id) VALUES ( :#{#music.musician}, :#{#music.nameMusic}, :#{#music.numberOfFavorites}, :#{#music.playTime}, :#{#music.singer}, :#{#music.status.id})", nativeQuery = true)
    void createMusic(@Param("music") Music music);
    @Modifying
    @Transactional
    @Query(value = "update music set status_id = 2 where id= :id",nativeQuery = true)
    void updateMusic(@Param("id") int id);
    @Modifying
    @Transactional
    @Query(value = "delete from music where id = :id", nativeQuery = true)
    void deleteMusic(@Param("id") int id);
    @Query(value = "select * from music where name_music like %:name%", nativeQuery = true )
    List<Music> searchMusicName(@Param("name") String nameMusic);
}
