package com.example.jewelry_be.service;

import com.example.jewelry_be.config.JwtUserDetails;
import com.example.jewelry_be.model.AccountUser;
import com.example.jewelry_be.repository.IAccountUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class AccountUserServiceImpl implements IAccountUserService{
    @Autowired
    private IAccountUserRepository accountUserRepository;
    @Override
    public Boolean existsByUsername(String userName) {
        return null;
    }

    @Override
    public Boolean createNewAppUser(AccountUser accountUser, String role) {
        return null;
    }

    @Override
    public Boolean logout(String email) {
        return null;
    }

    @Override
    public Integer findAppUserIdByUserName(String email) {
        return null;
    }

    @Override
    public boolean existsById(Integer id) {
        return false;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        AccountUser accountUser =accountUserRepository.findAccountUserByEmail(username);
        if (accountUser == null) {
            throw new UsernameNotFoundException("User name or password is wrong");
        }
        List<GrantedAuthority> grantList = new ArrayList<>();
        grantList.add(new SimpleGrantedAuthority(accountUser.getRoleUser().getName()));
        UserDetails userDetails = new JwtUserDetails(
                accountUser.getId(),
                accountUser.getUserName(),
                accountUser.getUserPassword(),
                grantList);
        return userDetails ;
    }
}
