package com.example.jewelry_be.controller;

import com.example.jewelry_be.model.OrderCart;
import com.example.jewelry_be.model.OrderDetail;
import com.example.jewelry_be.model.OrderUser;
import com.example.jewelry_be.model.UserInformation;
import com.example.jewelry_be.dto.OrderProductProjection;
import com.example.jewelry_be.projection.ListDateOrder;
import com.example.jewelry_be.projection.ListHistoryOrder;
import com.example.jewelry_be.service.orderCart.IOrderCartService;
import com.example.jewelry_be.service.orderUser.IOrderUserService;
import com.example.jewelry_be.service.userInfor.IUserInformationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/order")
public class OrderCartController {
    @Autowired
    private IOrderCartService orderCartService;
    @Autowired
    private IUserInformationService userInformationService;
    @Autowired
    private IOrderUserService orderUserService;

    @GetMapping("/user-information")
    public ResponseEntity<UserInformation> getUserInfomation(@RequestParam(value = "id", required = false) Integer id) {
        try {
            return new ResponseEntity<>(userInformationService.getUserInformationById(id), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }

    @GetMapping("/get-all")
    public ResponseEntity<List<OrderCart>> getOrderCart(@RequestParam(value = "userId") Integer id) {
        try {
            List<OrderCart> cartList = orderCartService.getAllOrderCart(id);
            return new ResponseEntity<>(cartList, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }


    @PostMapping("/add-to-cart")
    public ResponseEntity<HttpStatus> addProductToCart(@RequestBody OrderProductProjection orderCart) {
        try {
            OrderCart cart = orderCartService.findOrderCart(orderCart.getSizeId(), orderCart.getUserInformation(), orderCart.getProductId());
            if (cart == null) {
                orderCartService.addOrderCart(orderCart.getQuantity(),
                        orderCart.getSizeId(), orderCart.getUserInformation(),
                        orderCart.getProductId());
            }
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/update-quantity")
    public ResponseEntity<HttpStatus> updateQuantity(@RequestParam(value = "cartId", required = false) Integer cartId,
                                                     @RequestParam(value = "quantity", required = false) Integer quantity) {
        try {
            orderCartService.editOrderCart(quantity, cartId);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/delete-by-id")
    public ResponseEntity<HttpStatus> deleteById(@RequestParam(value = "id") Integer id) {
        try {
            orderCartService.deleteOrderById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
    @GetMapping("/check-quantity")
    public ResponseEntity<String> checkQuantityProduct(@RequestParam(value = "userId") Integer userId){
        List<OrderCart> cartList = orderCartService.getAllOrderCart(userId);
        boolean checkQuantity = cartList.stream().allMatch(cart->cart.getQuantity() <= cart.getProduct().getQuantity());
        if (checkQuantity) {
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>("Some products exceed the allowed quantity", HttpStatus.METHOD_NOT_ALLOWED);
    }

    @PostMapping("/create-order-user")
    public ResponseEntity<Integer> createNewOrder(@RequestParam(value = "userId", required = false) Integer userId,
                                                  @RequestParam(value = "note", required = false) String note) {
        if (userInformationService.existsById(userId)){
            Integer orderId = orderUserService.createOrderUserForUser(userId,note);
            System.out.println(orderId);
            return new ResponseEntity<>( orderId, HttpStatus.OK);
        }else {
            return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
        }
    }
    @GetMapping("/history")
    public ResponseEntity<List<ListHistoryOrder>> getAllOrderByUserId(@RequestParam(value = "userId",required = false) Integer userId){
        List<ListHistoryOrder> list = orderUserService.getAllOrderByUserId(userId);
        if (list==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }else {
            return new ResponseEntity<>(list,HttpStatus.OK);
        }
    }
    @GetMapping("/check-date")
    public ResponseEntity<List<ListDateOrder>> CheckAllDate(@RequestParam(value = "userId")Integer userId){
        List<ListDateOrder> list = orderUserService.getAllOrderUserId(userId);
        if (list==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }else {
            return new ResponseEntity<>(list,HttpStatus.OK);
        }
    }
}
