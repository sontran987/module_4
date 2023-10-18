package com.example.jewelry_be.service.userInfor;

import com.example.jewelry_be.model.UserInformation;

public interface IUserInformationService {
    UserInformation getUserInfor(String userName);
    UserInformation getUserInformationById(Integer id);
    boolean existsById(Integer id);
}
