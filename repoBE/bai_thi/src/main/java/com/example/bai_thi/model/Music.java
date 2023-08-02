package com.example.bai_thi.model;

import javax.persistence.*;

@Entity
public class Music {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nameMusic;
    private String singer;
    private String musician;
    private String playTime;
    private Long numberOfFavorites;
    @ManyToOne
    private Status status;

    public Music() {
    }

    public Music(String nameMusic, String singer, String musician, String playTime, Long numberOfFavorites, Status status) {
        this.nameMusic = nameMusic;
        this.singer = singer;
        this.musician = musician;
        this.playTime = playTime;
        this.numberOfFavorites = numberOfFavorites;
        this.status = status;
    }

    public Music(Integer id, String nameMusic, String singer, String musician, String playTime, Long numberOfFavorites, Status status) {
        this.id = id;
        this.nameMusic = nameMusic;
        this.singer = singer;
        this.musician = musician;
        this.playTime = playTime;
        this.numberOfFavorites = numberOfFavorites;
        this.status = status;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNameMusic() {
        return nameMusic;
    }

    public void setNameMusic(String nameMusic) {
        this.nameMusic = nameMusic;
    }

    public String getSinger() {
        return singer;
    }

    public void setSinger(String singer) {
        this.singer = singer;
    }

    public String getMusician() {
        return musician;
    }

    public void setMusician(String musician) {
        this.musician = musician;
    }

    public String getPlayTime() {
        return playTime;
    }

    public void setPlayTime(String playTime) {
        this.playTime = playTime;
    }

    public Long getNumberOfFavorites() {
        return numberOfFavorites;
    }

    public void setNumberOfFavorites(Long numberOfFavorites) {
        this.numberOfFavorites = numberOfFavorites;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }
}
