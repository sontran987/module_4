package com.example.jewelry_be.dto;

public class OrderProductProjection {
    public Integer quantity;
    public Integer sizeId;
    public Integer userInformation ;
    public Integer productId;

    public OrderProductProjection() {
    }

    public OrderProductProjection(Integer quantity, Integer sizeId, Integer userInformation, Integer productId) {
        this.quantity = quantity;
        this.sizeId = sizeId;
        this.userInformation = userInformation;
        this.productId = productId;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Integer getSizeId() {
        return sizeId;
    }

    public void setSizeId(Integer sizeId) {
        this.sizeId = sizeId;
    }

    public Integer getUserInformation() {
        return userInformation;
    }

    public void setUserInformation(Integer userInformation) {
        this.userInformation = userInformation;
    }

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }
}
