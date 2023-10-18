package com.example.jewelry_be.service.userInfor;

import com.example.jewelry_be.model.UserInformation;
import com.example.jewelry_be.repository.IUserInformationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserInformationServiceImpl implements IUserInformationService {
    @Autowired
    private IUserInformationRepository userInformationRepository;

    @Override
    public UserInformation getUserInfor(String userName) {
        return userInformationRepository.getUserByAccountUser(userName);
    }

    @Override
    public UserInformation getUserInformationById(Integer id) {
        return userInformationRepository.getUserById(id);
    }

    @Override
    public boolean existsById(Integer id) {
        return userInformationRepository.existsById(id);
    }
}
