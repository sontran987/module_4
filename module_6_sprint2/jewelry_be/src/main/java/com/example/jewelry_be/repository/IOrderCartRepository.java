package com.example.jewelry_be.repository;

import com.example.jewelry_be.model.OrderCart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface IOrderCartRepository extends JpaRepository<OrderCart, Integer> {
    @Query(value = "select * " +
            "from order_cart " +
            "         join product p on p.id = order_cart.product_id " +
            "         join size s on s.id = order_cart.size_id " +
            "         join user_information ui on ui.id = order_cart.user_information_id " +
            " where order_cart.user_information_id = :use_id ", nativeQuery = true)
    List<OrderCart> getCartByUserInformation(@Param("use_id") Integer use_id);

    @Query(value = " select * " +
            " from order_cart " +
            "         join size s on s.id = order_cart.size_id " +
            "         join user_information ui on ui.id = order_cart.user_information_id " +
            "         join product p on p.id = order_cart.product_id " +
            " where s.id = :sizeId and ui.id = :userInformation and p.id = :productId", nativeQuery = true)
    OrderCart findOrderCartByUserInformationAndProductIdAndSize(@Param("sizeId") Integer sizeId,
                                                                @Param("userInformation") Integer userInformation,
                                                                @Param("productId") Integer productId);

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO order_cart (quantity, flag_deleted, size_id, user_information_id, product_id) " +
            "VALUES (:quantity, false, :sizeId, :userInformation, :productId);", nativeQuery = true)
    void addOrderCart(@Param("quantity") Integer quantity,
                      @Param("sizeId") Integer sizeId,
                      @Param("userInformation") Integer userInformation,
                      @Param("productId") Integer productId);

    @Transactional
    @Modifying
    @Query(value = "update order_cart " +
            "set quantity = :quantity " +
            "where id = :cartId", nativeQuery = true)
    void editOrderCart(@Param("quantity") Integer quantity,
                       @Param("cartId") Integer cartId);

    @Modifying
    @Transactional
    @Query(value = "delete from order_cart where id = :id", nativeQuery = true)
    void deleteOrderCartById(@Param("id") Integer id);

}
