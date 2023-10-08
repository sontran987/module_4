package com.example.jewelry_be.config;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

public class JwtUserDetails implements UserDetails {

    private Integer id;

    private String email;

    private String password;
    private Collection<? extends GrantedAuthority> authorities;


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }
    // Các phương thức khác của UserDetails
    @Override
    public boolean isAccountNonExpired() {
        // Xác định logic kiểm tra tài khoản có hết hạn hay không
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        // Xác định logic kiểm tra tài khoản có bị khóa hay không

        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        // Xác định logic kiểm tra thông tin xác thực (credentials) có hết hạn hay không
        return false;
    }

    @Override
    public boolean isEnabled() {
        // Xác định logic kiểm tra tài khoản có được kích hoạt hay không
        return false;
    }
    public Integer getId(){
        return id;
    }
}
