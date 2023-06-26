package com.example.execrise_validate_thong_tin_bai_hat.model.service.impl;

import com.example.execrise_validate_thong_tin_bai_hat.model.model.Song;
import com.example.execrise_validate_thong_tin_bai_hat.model.repository.ISongRepository;
import com.example.execrise_validate_thong_tin_bai_hat.model.service.ISongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class SongService implements ISongService {
    @Autowired
    private ISongRepository songRepository;

    @Override
    public List<Song> displaySong() {
        return songRepository.findAll();
    }

    @Override
    public void createSong(Song song) {
        songRepository.save(song);
    }

    @Override
    public void editSong(Song song) {
        songRepository.save(song);
    }

    @Override
    public boolean deleteSong(Integer id) {
        songRepository.isDelete(id);
        return true;
    }

    @Override
    public Song detailSong(Integer id) {
        try {
            return songRepository.findById(id).get();
        } catch (NoSuchElementException e) {
            return null;
        }
    }
}
