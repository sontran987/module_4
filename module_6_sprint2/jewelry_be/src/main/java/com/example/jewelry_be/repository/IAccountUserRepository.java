package com.example.jewelry_be.repository;

import com.example.jewelry_be.model.AccountUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;

public interface IAccountUserRepository extends JpaRepository<AccountUser, Integer> {
    @Transactional
    @Query(value = "select * from account_user" +
            " join role_user as role on role.id = account_user.role_user_id" +
            " where email = :email and flag_deleted = false", nativeQuery = true)
    AccountUser findAccountUserByEmail(@Param("email") String email);


}
