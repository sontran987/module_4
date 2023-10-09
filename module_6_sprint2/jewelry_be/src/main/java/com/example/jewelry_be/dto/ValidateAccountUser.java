package com.example.jewelry_be.dto;

import org.springframework.validation.Errors;

public class ValidateAccountUser {
    private ValidateAccountUser() {
        throw new IllegalStateException("Utility class");
    }
    private static final String NAME_NOT_EMPTY = "Do not leave your account blank";
    private static final String PASSWORD_NOT_EMPTY = "Do not leave the password blank";
    private static final String CHAR_LENGTH_LESS_THREE = "The number of characters must be greater than or equal to 3";
    private static final String CHAR_LENGTH_GREATER_FIFTY = "The number of characters is less than or equal to 50";
    private static final String USER_NAME = "userName";
    private static final String PASSWORD = "password";
    private static final String CONFIRM_PASSWORD = "confirmPassword";

    public static void checkValidateAppUserName(String name, Errors errors) {
        if (name == null || name.trim().length() == 0) {
            errors.rejectValue(USER_NAME, "", NAME_NOT_EMPTY);
        } else if (name.length() > 50) {
            errors.rejectValue(USER_NAME, "", CHAR_LENGTH_GREATER_FIFTY);
        } else if (name.length() < 3) {
            errors.rejectValue(USER_NAME, "", CHAR_LENGTH_LESS_THREE);
        }
    }

    public static void checkValidateAppUserPassword(String password, Errors errors) {
        if (password == null || password.trim().length() == 0) {
            errors.rejectValue(PASSWORD, "", NAME_NOT_EMPTY);
        } else if (password.length() > 50) {
            errors.rejectValue(PASSWORD, "", CHAR_LENGTH_GREATER_FIFTY);
        } else if (password.length() < 3) {
            errors.rejectValue(PASSWORD, "", CHAR_LENGTH_LESS_THREE);
        }
    }

    public static void checkValidateConfirmAppUserPassword(String confirmPassword, Errors errors) {
        if (confirmPassword == null || confirmPassword.trim().length() == 0) {
            errors.rejectValue(CONFIRM_PASSWORD, "", PASSWORD_NOT_EMPTY);
        } else if (confirmPassword.length() > 50) {
            errors.rejectValue(CONFIRM_PASSWORD, "", CHAR_LENGTH_GREATER_FIFTY);
        } else if (confirmPassword.length() < 3) {
            errors.rejectValue(CONFIRM_PASSWORD, "", CHAR_LENGTH_LESS_THREE);
        }
    }

    public static boolean checkVerificationPassword(String password, String confirmPassword) {
        return password.equals(confirmPassword);
    }

    public static String checkValidateOnlyAppUserName(String name) {
        if (name == null || name.trim().length() == 0) {
            return  NAME_NOT_EMPTY;
        } else if (name.length() > 50) {
            return  CHAR_LENGTH_GREATER_FIFTY;
        } else if (name.length() < 3) {
            return  CHAR_LENGTH_LESS_THREE;
        }
        return "";
    }
}
