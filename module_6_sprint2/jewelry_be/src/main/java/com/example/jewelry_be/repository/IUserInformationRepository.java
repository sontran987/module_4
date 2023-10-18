package com.example.jewelry_be.repository;

import com.example.jewelry_be.model.UserInformation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IUserInformationRepository extends JpaRepository<UserInformation, Integer> {
    @Query(value = "select us.* from user_information as us " +
            "join account_user on account_user.id = us.account_user_id " +
            "where account_user.user_name = :userAccount and us.flag_deleted = false", nativeQuery = true)
    UserInformation getUserByAccountUser(@Param("userAccount") String userAccount);

    @Query(value = "select us.* from user_information as us " +
            "join account_user on account_user.id = us.account_user_id " +
            "where us.id = :id and us.flag_deleted = false", nativeQuery = true)
    UserInformation getUserById(@Param("id") Integer id);
}
