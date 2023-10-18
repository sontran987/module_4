package com.example.jewelry_be.model;

import javax.persistence.*;

@Entity
public class Rating {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer starNumber;
    private String comments;

    private String dateComment;
    @ManyToOne
    private Product product;
    @ManyToOne
    private UserInformation userInformation;

    public Rating() {
    }

    public Rating(Integer id, Integer starNumber, String comment, String dateComent, Product product, UserInformation userInformation) {
        this.id = id;
        this.starNumber = starNumber;
        this.comments = comment;
        this.dateComment = dateComent;
        this.product = product;
        this.userInformation = userInformation;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comment) {
        this.comments = comment;
    }

    public String getDateComment() {
        return dateComment;
    }

    public void setDateComment(String dateComent) {
        this.dateComment = dateComent;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getStarNumber() {
        return starNumber;
    }

    public void setStarNumber(Integer starNumber) {
        this.starNumber = starNumber;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public UserInformation getUserInformation() {
        return userInformation;
    }

    public void setUserInformation(UserInformation userInformation) {
        this.userInformation = userInformation;
    }
}
