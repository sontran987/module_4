package com.example.jewelry_be.service;

import com.example.jewelry_be.model.AccountUser;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface IAccountUserService extends UserDetailsService {
    Boolean existsByUsername(String userName);

    Boolean createNewAppUser(AccountUser accountUser, String role);

    Boolean logout(String email);

    Integer findAppUserIdByUserName(String email);

    boolean existsById(Integer id);
}
