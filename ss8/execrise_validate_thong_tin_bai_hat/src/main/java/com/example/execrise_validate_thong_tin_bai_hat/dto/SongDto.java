package com.example.execrise_validate_thong_tin_bai_hat.dto;

import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

public class SongDto implements Validator {
    private int id;
    @NotBlank
    @Size(max = 800)
    @Pattern(regexp = "^[\\w\\s]+$", message = "Don't have  @ ; , . = - + ")
    private String nameSong;
    @NotBlank
    @Size(max = 300)
    @Pattern(regexp = "^[\\w\\s]+$", message = "Don't have  @ ; , . = - + ")
    private String artist;
    @NotBlank
    @Size(max = 1000)
    @Pattern(regexp = "^([\\w\\d\\s]+[,]*)+$", message = "Don't have  @ ; , . = - + ")
    private String kindOfMusic;
    private boolean isFlagDelete;

    public SongDto(int id, String nameSong, String artist, String kindOfMusic, boolean isFlagDelete) {
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

    public SongDto() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public SongDto(int id, String nameSong, String artist, String kindOfMusic) {
        this.id = id;
        this.nameSong = nameSong;
        this.artist = artist;
        this.kindOfMusic = kindOfMusic;
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

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {

    }
}
