package com.example.execries_contronic_mailbox.models.model;

public class Mail {
    private int id;
    private String languages;
    private int paseSize;
    private boolean spamsFilter;
    private String signature;

    public Mail() {
    }

    public Mail(int id, String languages, int paseSize, boolean spamsFilter, String signature) {
        this.id = id;
        this.languages = languages;
        this.paseSize = paseSize;
        this.spamsFilter = spamsFilter;
        this.signature = signature;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLanguages() {
        return languages;
    }

    public void setLanguages(String languages) {
        this.languages = languages;
    }

    public int getPaseSize() {
        return paseSize;
    }

    public void setPaseSize(int paseSize) {
        this.paseSize = paseSize;
    }

    public boolean isSpamsFilter() {
        return spamsFilter;
    }

    public void setSpamsFilter(boolean spamsFilter) {
        this.spamsFilter = spamsFilter;
    }

    public String getSignature() {
        return signature;
    }

    public void setSignature(String signature) {
        this.signature = signature;
    }
}
