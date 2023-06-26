package com.example.execrise_validate_thong_tin_bai_hat.model.model;




import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class Song {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nameSong;
    private String artist;
    private String kindOfMusic;

    @Column(name = "is_flag_delete", nullable = false, columnDefinition = "bit default 0")
    private boolean isFlagDelete;
    public Song() {
    }

    public Song(int id, String nameSong, String artist, String kindOfMusic, boolean isFlagDelete) {
        this.id = id;
        this.nameSong = nameSong;
        this.artist = artist;
        this.kindOfMusic = kindOfMusic;
        this.isFlagDelete = isFlagDelete;
    }

    public boolean isFlagDelete() {
        return isFlagDelete;
    }

    public void setFlagDelete(boolean flagDelete) {
        isFlagDelete = flagDelete;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNameSong() {
        return nameSong;
    }

    public void setNameSong(String nameSong) {
        this.nameSong = nameSong;
    }

    public String getArtist() {
        return artist;
    }

    public void setArtist(String artist) {
        this.artist = artist;
    }

    public String getKindOfMusic() {
        return kindOfMusic;
    }

    public void setKindOfMusic(String kindOfMusic) {
        this.kindOfMusic = kindOfMusic;
    }
}
