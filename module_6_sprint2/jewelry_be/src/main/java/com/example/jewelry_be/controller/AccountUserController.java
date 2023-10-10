package com.example.jewelry_be.controller;

import com.example.jewelry_be.config.JwtTokenUtil;
import com.example.jewelry_be.config.JwtUserDetails;
import com.example.jewelry_be.dto.AccountUserDto;
import com.example.jewelry_be.model.JwtResponse;
import com.example.jewelry_be.model.UserInformation;
import com.example.jewelry_be.service.account.IAccountUserService;
import com.example.jewelry_be.service.userInfor.IUserInformationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.web.bind.annotation.*;


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
    private IUserInformationService userInformationService;

    private static final String LOGIN_FAILED = "Login failed.";

    private void authenticate(String username, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<Object> loginByAccount(@RequestBody AccountUserDto accountUserDto) {
        try {
            authenticate(accountUserDto.getUserName(), accountUserDto.getUserPassword());
        } catch (DisabledException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Your account has been disabled.");
        } catch (BadCredentialsException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(LOGIN_FAILED);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        JwtUserDetails userDetails = (JwtUserDetails) this.accountUserService.loadUserByUsername(accountUserDto.getUserName());
        GrantedAuthority authority = userDetails.getAuthorities().stream().findFirst().orElse(null);
        UserInformation userInfor = userInformationService.getUserInfor(userDetails.getUsername());
        String jwtToken = jwtTokenUtil.generateToken(userDetails.getUsername());
        return ResponseEntity.ok()
                .body(new JwtResponse(jwtToken, userInfor.getNameUser(),
                        authority != null ? authority.getAuthority() : null));
    }

}
