package com.example.jewelry_be.dto;

import com.example.jewelry_be.model.Product;
import com.example.jewelry_be.model.UserInformation;

import javax.persistence.ManyToOne;

public class RatingDto {
    private Integer starNumber;
    private String comments;
    private String dateComment;
    private Integer product;
    private Integer userInformation;

    public RatingDto() {
    }

    public RatingDto( Integer starNumber, String comments, String dateComment, Integer product, Integer userInformation) {

        this.starNumber = starNumber;
        this.comments = comments;
        this.dateComment = dateComment;
        this.product = product;
        this.userInformation = userInformation;
    }

    public Integer getStarNumber() {
        return starNumber;
    }

    public void setStarNumber(Integer starNumber) {
        this.starNumber = starNumber;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    public String getDateComment() {
        return dateComment;
    }

    public void setDateComment(String dateComment) {
        this.dateComment = dateComment;
    }

    public Integer getProduct() {
        return product;
    }

    public void setProduct(Integer product) {
        this.product = product;
    }

    public Integer getUserInformation() {
        return userInformation;
    }

    public void setUserInformation(Integer userInformation) {
        this.userInformation = userInformation;
    }
}
