package com.example.bai_thi.service;

import com.example.bai_thi.model.Music;
import com.example.bai_thi.repository.IMusicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MusicServiceImpl implements IMusicService {
    @Autowired
    private IMusicRepository musicRepository;

    @Override
    public Page<Music> getMusic(Pageable pageable) {
        return musicRepository.getMusic(pageable);
    }
    @Override
    public void createMusic(Music music) {
        musicRepository.createMusic(music);
    }

    @Override
    public void updateMusic(int id) {
        musicRepository.updateMusic(id);
    }

    @Override
    public void deleteMusic(int id) {
        musicRepository.deleteMusic(id);
    }

    @Override
    public List<Music> searchMusic(String name) {
        return musicRepository.searchMusicName(name);
    }
}
