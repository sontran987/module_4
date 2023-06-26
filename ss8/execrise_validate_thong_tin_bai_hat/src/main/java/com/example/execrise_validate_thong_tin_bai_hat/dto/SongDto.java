package com.example.execrise_validate_thong_tin_bai_hat.dto;

import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

public class SongDto implements Validator {
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

    public SongDto() {
    }

    public SongDto(String nameSong, String artist, String kindOfMusic) {
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
