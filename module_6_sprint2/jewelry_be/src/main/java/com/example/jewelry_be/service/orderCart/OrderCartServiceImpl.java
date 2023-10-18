package com.example.jewelry_be.service.orderCart;

import com.example.jewelry_be.model.OrderCart;
import com.example.jewelry_be.repository.IOrderCartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderCartServiceImpl implements IOrderCartService {
    @Autowired
    private IOrderCartRepository orderRepository;

    @Override
    public List<OrderCart> getAllOrderCart(Integer id) {
        return orderRepository.getCartByUserInformation(id);
    }

    @Override
    public OrderCart findOrderCart(Integer sizeId, Integer userInformation, Integer productId) {
        return orderRepository.findOrderCartByUserInformationAndProductIdAndSize(sizeId,userInformation,productId);
    }

    @Override
    public void addOrderCart(Integer quantity, Integer sizeId, Integer userInformation, Integer productId) throws RuntimeException {
        try {
            orderRepository.addOrderCart(quantity, sizeId, userInformation, productId);
        } catch (Exception e) {
            throw new RuntimeException();
        }
    }

    @Override
    public void editOrderCart(Integer quantity, Integer cartId) throws RuntimeException {
        try {

            orderRepository.editOrderCart(quantity, cartId);
        } catch (Exception e) {
            throw new RuntimeException();
        }
    }

    @Override
    public void deleteOrderById(Integer id) throws RuntimeException {
        try{
            orderRepository.deleteOrderCartById(id);
        }catch (Exception e){
            throw new RuntimeException();
        }
    }
}
