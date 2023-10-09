package com.example.jewelry_be.controller;

import com.example.jewelry_be.config.JwtTokenUtil;
import com.example.jewelry_be.dto.AccountUserDto;
import com.example.jewelry_be.model.AccountUser;
import com.example.jewelry_be.model.JwtResponse;
import com.example.jewelry_be.service.IAccountUserService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/account")
public class AccountUserController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtTokenUtil jwtTokenUtil;
    @Autowired
    private IAccountUserService accountUserService;
    @Autowired
    private PasswordEncoder passwordEncoder;
    private static final String LOGIN_FAILED = "Login failed. ";

    @PostMapping("/login-by-username")
    public ResponseEntity<Object> loginByAccount(@Valid @RequestBody AccountUserDto accountUserDto,
                                                 BindingResult bindingResult) {
        new AccountUserDto().validate(accountUserDto, bindingResult);
        if (bindingResult.hasErrors()) {
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body(LOGIN_FAILED);
        }
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                    accountUserDto.getUserName(),
                    accountUserDto.getUserPassword()));
        } catch (DisabledException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Your account has been disabled.");
        }catch (BadCredentialsException e){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(LOGIN_FAILED);
        }
        AccountUser accountUser = new AccountUser();
        BeanUtils.copyProperties(accountUserDto,accountUser);
        UserDetails userDetails = accountUserService.loadUserByUsername(accountUser.getUserName());
        String jwtToken = jwtTokenUtil.generateToken(userDetails);
        return ResponseEntity.ok().body(new JwtResponse());
    }

}
