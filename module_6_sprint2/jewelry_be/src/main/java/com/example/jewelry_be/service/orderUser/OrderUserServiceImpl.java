package com.example.jewelry_be.service.orderUser;

import com.example.jewelry_be.model.OrderDetail;
import com.example.jewelry_be.model.OrderUser;
import com.example.jewelry_be.projection.ListDateOrder;
import com.example.jewelry_be.projection.ListHistoryOrder;
import com.example.jewelry_be.repository.IOrderUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderUserServiceImpl implements IOrderUserService{
    @Autowired
    private IOrderUserRepository orderUserRepository;

    @Override
    public Integer createOrderUserForUser(Integer appUserId, String note) {
        return orderUserRepository.createOrderForUser(appUserId,note);
    }

    @Override
    public List<ListHistoryOrder> getAllOrderByUserId(Integer userId) {
        try {
            return orderUserRepository.getOrderUserByUserId(userId);
        }catch (Exception e){
            return null ;
        }
    }

    @Override
    public List<ListDateOrder> getAllOrderUserId(Integer userId) {
        try {
            return orderUserRepository.getAllOrderUser(userId);
        }catch (Exception e){
            return null ;
        }
    }
}
