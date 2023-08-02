package com.example.bai_thi.dto;

import com.example.bai_thi.model.Status;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

public class MusicDto {
    private Integer id;
    @NotBlank
    @Pattern(regexp = "^[[\\w]+\\s]*$", message = "Phai dung dinh dang")
    @Max(value = 50, message = "Ky tu khong qua 50 ")
    private String nameMusic;
    @NotBlank
    @Max(value = 30,message = "Khong duoc qua 30 ky tu")
    @Pattern(regexp = "^[[\\w]+\\s]*$", message = "Phai dung dinh dang")
    private String singer;
    @NotBlank
    @Max(value = 30,message = "Khong duoc qua 30 ky tu")
    @Pattern(regexp = "^[[\\w]+\\s]*$", message = "Phai dung dinh dang")
    private String musician;
    @NotBlank
    @Pattern(regexp = "^[0-9]{2}(:)([0-5][0-9]||60)$",message = "Phai nhap dung dinh dang hh:mm")
    private String playTime;
    @NotBlank
    @Min(0)
    private Long numberOfFavorites;
    private Status status;
    public MusicDto() {
    }

    public MusicDto(String nameMusic, String singer, String musician, String playTime, Long numberOfFavorites, Status status) {
        this.nameMusic = nameMusic;
        this.singer = singer;
        this.musician = musician;
        this.playTime = playTime;
        this.numberOfFavorites = numberOfFavorites;
        this.status = status;
    }

    public MusicDto(Integer id, String nameMusic, String singer, String musician, String playTime, Long numberOfFavorites, Status status) {
        this.id = id;
        this.nameMusic = nameMusic;
        this.singer = singer;
        this.musician = musician;
        this.playTime = playTime;
        this.numberOfFavorites = numberOfFavorites;
        this.status = status;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
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
}
