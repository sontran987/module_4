package com.example.jewelry_be.controller;

import com.example.jewelry_be.dto.RatingDto;
import com.example.jewelry_be.model.OrderUser;
import com.example.jewelry_be.model.Rating;
import com.example.jewelry_be.service.rating.IRatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/rating")
public class RatingController {
    @Autowired
    private IRatingService ratingService;

    @GetMapping("/get-rating")
    public ResponseEntity<List<Rating>> getAllRatingComment(@RequestParam(value = "productId",required = false)Integer productId){
        List<Rating> list =ratingService.getAllRating(productId);
        if (list== null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }else {
            return new ResponseEntity<>(list,HttpStatus.OK);
        }
    }

    @PostMapping("/create-rating")
    public ResponseEntity<HttpStatus> addRating(@RequestBody RatingDto rating) {
        try {
            ratingService.addRating(rating);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
        return new ResponseEntity<>(HttpStatus.NOT_EXTENDED);
        }
    }

    @GetMapping("/check-purchase")
    public ResponseEntity<List<OrderUser>> checkPurchase(@RequestParam(value = "userId") Integer userId,
                                                   @RequestParam(value = "productId")Integer productId){
        List<OrderUser> orderUser = ratingService.checkPurchase(userId, productId);
        if (orderUser.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }else {
            return new ResponseEntity<>(orderUser,HttpStatus.OK);
        }
    }

}
