package com.example.jewelry_be.service.orderCart;

import com.example.jewelry_be.model.OrderCart;

import java.util.List;

public interface IOrderCartService {
    List<OrderCart> getAllOrderCart(Integer id);
    OrderCart findOrderCart( Integer sizeId, Integer userInformation,Integer productId );
    void addOrderCart(Integer quantity, Integer sizeId, Integer userInformation,Integer productId);
    void editOrderCart(Integer quantity, Integer cartId);
    void deleteOrderById(Integer id);

}
