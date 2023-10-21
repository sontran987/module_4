package com.example.jewelry_be.repository;

import com.example.jewelry_be.dto.RatingDto;
import com.example.jewelry_be.model.Rating;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.persistence.ManyToOne;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

public interface IRatingRepository extends JpaRepository<Rating, Integer> {

    @Query(value = " select * " +
            " from rating " +
            " join product p on p.id = rating.product_id " +
            " join user_information ui on ui.id = rating.user_information_id " +
            " where p.id = :productId order by rating.id desc ", nativeQuery = true)
    List<Rating> getRatingByProduct(@Param("productId") Integer productId);

    @Transactional
    @Modifying
    @Query(value = "insert into rating (star_number, comments, date_comment, product_id, user_information_id)  " +
            "values (:#{#rating.starNumber},:#{#rating.comments},:#{#rating.dateComment},:#{#rating.product},:#{#rating.userInformation})", nativeQuery = true)
    void addRating(@Param("rating") RatingDto ratingDto);

}
