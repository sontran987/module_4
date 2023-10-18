package com.example.jewelry_be.repository;

import com.example.jewelry_be.model.OrderUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;

public interface IOrderUserRepository extends JpaRepository<OrderUser,Integer> {
    @Modifying
    @Transactional
    @Procedure("createOrder")
    Integer createOrderForUser(@Param("user_id") Integer userId,
                               @Param("note") String note,
                            @Param("cart_ids") String cartIDsInText );
}
