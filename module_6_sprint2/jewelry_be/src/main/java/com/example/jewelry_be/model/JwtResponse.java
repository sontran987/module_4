package com.example.jewelry_be.model;

import java.io.Serializable;

public class JwtResponse implements Serializable {

    private static final long serialVersionUID = -8091879091924046844L;
    private final String token;
    private String nameUser;
    private Integer id;
    private String role;

    public JwtResponse(String token) {
        this.token = token;
    }

    public JwtResponse(String token, String nameUser, Integer id, String role) {
        this.token = token;
        this.nameUser = nameUser;
        this.id = id;
        this.role = role;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getToken() {
        return token;
    }

    public String getNameUser() {
        return nameUser;
    }

    public void setNameUser(String nameUser) {
        this.nameUser = nameUser;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
