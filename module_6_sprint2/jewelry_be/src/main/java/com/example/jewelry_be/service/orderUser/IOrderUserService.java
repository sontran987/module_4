package com.example.jewelry_be.service.orderUser;

import com.example.jewelry_be.model.OrderDetail;
import com.example.jewelry_be.model.OrderUser;
import com.example.jewelry_be.projection.ListDateOrder;
import com.example.jewelry_be.projection.ListHistoryOrder;

import java.util.List;

public interface IOrderUserService {
    Integer createOrderUserForUser(Integer appUserId, String note);
    List<ListHistoryOrder> getAllOrderByUserId(Integer userId);
    List<ListDateOrder> getAllOrderUserId(Integer userId);
}
