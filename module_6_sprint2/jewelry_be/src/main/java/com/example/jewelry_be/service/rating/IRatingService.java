package com.example.jewelry_be.service.rating;

import com.example.jewelry_be.dto.RatingDto;
import com.example.jewelry_be.model.OrderUser;
import com.example.jewelry_be.model.Rating;

import java.util.List;

public interface IRatingService {
    void addRating(RatingDto rating);
    List<Rating> getAllRating(Integer productId);
    List<OrderUser> checkPurchase(Integer userId, Integer productId);
}
