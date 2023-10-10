package com.example.jewelry_be.service.account;

import com.example.jewelry_be.config.JwtUserDetails;
import com.example.jewelry_be.model.AccountUser;
import com.example.jewelry_be.repository.IAccountUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AccountUserServiceImpl implements IAccountUserService {
    @Autowired
    private IAccountUserRepository accountUserRepository;


    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        AccountUser accountUser = accountUserRepository.findAccountUserByEmail(userName);
        if (accountUser == null) {
            throw new UsernameNotFoundException("User name or password is wrong");
        }
        List<GrantedAuthority> authorities = new ArrayList<>();
        String role = accountUser.getRoleUser().getNameRole();
        authorities.add(new SimpleGrantedAuthority(role));
        UserDetails userDetails = new JwtUserDetails(
                accountUser.getId(),
                accountUser.getUserName(),
                accountUser.getUserPassword(),
                authorities
        );
        return userDetails;
    }
}
