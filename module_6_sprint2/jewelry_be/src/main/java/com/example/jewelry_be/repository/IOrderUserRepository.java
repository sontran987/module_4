package com.example.jewelry_be.repository;

import com.example.jewelry_be.model.OrderUser;
import com.example.jewelry_be.projection.ListDateOrder;
import com.example.jewelry_be.projection.ListHistoryOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

public interface IOrderUserRepository extends JpaRepository<OrderUser, Integer> {
    @Modifying
    @Transactional
    @Procedure("createOrder")
    Integer createOrderForUser(@Param("user_id") Integer userId,
                               @Param("note") String note);

    @Query(value = "select * FROM order_user " +
            "join order_detail od on order_user.id = od.order_user_id " +
            "join user_information ui on ui.id = order_user.user_information_id " +
            "where ui.id = :userId and od.product_id = :productId", nativeQuery = true)
    List<OrderUser> checkPurchase(@Param("userId") Integer userId,
                                      @Param("productId") Integer productId);

    @Query(value = " select p.id       as productId, " +
            "       ou.order_date      as orderDate, " +
            "       order_detail.price as price, " +
            "       s.size_name        as nameSize, " +
            "       order_detail.quantity as quantity, " +
            "       p.name_product as nameProduct, " +
            "       p.image_product as image " +
            " FROM order_detail " +
            "         left join order_user ou on ou.id = order_detail.order_user_id " +
            "         join user_information ui on ui.id = ou.user_information_id " +
            "         join product p on p.id = order_detail.product_id " +
            "         join size s on s.id = order_detail.size_id " +
            " where ui.id = :userId " +
            " order by ou.order_date, order_detail.id desc ", nativeQuery = true)
    List<ListHistoryOrder> getOrderUserByUserId(@Param("userId") Integer userId);

    @Query(value = " select order_user.order_date AS orderDate " +
            " FROM order_user " +
            "         join user_information ui on ui.id = order_user.user_information_id " +
            " where ui.id = :userId " +
            " group by order_user.order_date " +
            " order by order_user.order_date desc ", nativeQuery = true)
    List<ListDateOrder> getAllOrderUser(@Param("userId") Integer userId);
}
