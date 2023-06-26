package com.example.execrise_validate_thong_tin_bai_hat.model.service;

import com.example.execrise_validate_thong_tin_bai_hat.model.model.Song;

import java.util.List;

public interface ISongService {
    List<Song> displaySong();
    void createSong(Song song);
    void editSong(Song song);
    boolean deleteSong(Integer id);
    Song detailSong(Integer id);
}
