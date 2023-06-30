package com.example.execries_restful_app_blog.model.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jdk.nashorn.internal.ir.annotations.Ignore;

import javax.persistence.*;

@Entity
public class Blog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;
    private String heading;
    private String dateSubmitted;

    @Column(name = "content_blog", nullable = false,columnDefinition ="Longtext")
    private String content;

    @JsonIgnore
    @Column(name = "is_flag_delete", nullable = false,columnDefinition= "bit default 0")
    private boolean isFlagDelete;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    public Blog(Integer id, String title, String heading, String dateSubmitted, String content, boolean isFlagDelete, Category category) {
        this.id = id;
        this.title = title;
        this.heading = heading;
        this.dateSubmitted = dateSubmitted;
        this.content = content;
        this.isFlagDelete = isFlagDelete;
        this.category = category;
    }

    public Blog() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getHeading() {
        return heading;
    }

    public void setHeading(String heading) {
        this.heading = heading;
    }

    public String getDateSubmitted() {
        return dateSubmitted;
    }

    public void setDateSubmitted(String dateSubmitted) {
        this.dateSubmitted = dateSubmitted;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public boolean isFlagDelete() {
        return isFlagDelete;
    }

    public void setFlagDelete(boolean flagDelete) {
        isFlagDelete = flagDelete;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
}