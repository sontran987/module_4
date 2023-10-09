package com.example.jewelry_be.dto;

import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

public class AccountUserDto implements Validator {
    private String userName;
    private String userPassword;

    public AccountUserDto() {
    }

    public AccountUserDto(String userName, String userPassword) {
        this.userName = userName;
        this.userPassword = userPassword;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {
        AccountUserDto accountUserDto = (AccountUserDto) target;
        ValidateAccountUser.checkValidateAppUserName(accountUserDto.getUserName(), errors);
        ValidateAccountUser.checkValidateAppUserPassword(accountUserDto.getUserPassword(), errors);
    }
}
