package com.example.bai_thi.service;

import com.example.bai_thi.model.Music;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IMusicService {
    Page<Music> getMusic(Pageable pageable);
    void createMusic(Music music);
    void updateMusic(int id);
    void deleteMusic(int id);
    List<Music> searchMusic(String name);
}
