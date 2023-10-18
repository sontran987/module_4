package com.example.jewelry_be.model;

import java.util.List;

public class ReqBody {
    private List<String> cartIds;


    public ReqBody(List<String> cartIds) {
        this.cartIds = cartIds;

    }

    public List<String> getCartIds() {
        return cartIds;
    }

    public void setCartIds(List<String> cartIds) {
        this.cartIds = cartIds;
    }


}
