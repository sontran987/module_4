package com.example.execries_contronic_mailbox.models.service.impl;

import com.example.execries_contronic_mailbox.models.model.Mail;
import com.example.execries_contronic_mailbox.models.repository.IMailRepository;
import com.example.execries_contronic_mailbox.models.service.IMailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MailServiceImpl implements IMailService {
    @Autowired
    IMailRepository mailRepository;
    @Override
    public List<Mail> display() {
        return mailRepository.display();
    }

    @Override
    public List<String> displayLang() {
        return mailRepository.displayLang();
    }

    @Override
    public List<Integer> displayPage() {
        return mailRepository.displayPage();
    }

    @Override
    public Mail showFormEdit() {
        return mailRepository.showFormEdit();
    }

    @Override
    public void edit(Mail mail) {
        mailRepository.edit(mail);
    }
}
