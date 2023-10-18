package com.example.jewelry_be.service.orderUser;

import com.example.jewelry_be.repository.IOrderUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderUserServiceImpl implements IOrderUserService{
    @Autowired
    private IOrderUserRepository orderUserRepository;

    @Override
    public Integer createOrderUserForUser(Integer appUserId, String note, String cartIDsInText) {
        return orderUserRepository.createOrderForUser(appUserId,note,cartIDsInText);
    }
}
