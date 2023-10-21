package com.example.jewelry_be.service.rating;

import com.example.jewelry_be.dto.RatingDto;
import com.example.jewelry_be.model.OrderUser;
import com.example.jewelry_be.model.Rating;
import com.example.jewelry_be.repository.IOrderUserRepository;
import com.example.jewelry_be.repository.IRatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RatingServiceImpl implements IRatingService{
    @Autowired
    private IRatingRepository ratingRepository;
    @Autowired
    private IOrderUserRepository orderUserRepository;
    @Override
    public void addRating(RatingDto rating) {
        ratingRepository.addRating(rating);
    }

    @Override
    public List<Rating> getAllRating(Integer productId) {
        List<Rating> list = ratingRepository.getRatingByProduct(productId);
        if (list.isEmpty()){
            return null;
        }
        return list;
    }

    @Override
    public List<OrderUser> checkPurchase(Integer userId, Integer productId) {
        return orderUserRepository.checkPurchase(userId,productId);
    }
}
