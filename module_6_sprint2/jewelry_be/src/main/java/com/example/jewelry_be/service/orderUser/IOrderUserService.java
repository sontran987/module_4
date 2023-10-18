package com.example.jewelry_be.service.orderUser;

public interface IOrderUserService {
    Integer createOrderUserForUser(Integer appUserId, String note, String cartIDsInText);
}
