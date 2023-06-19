package com.example.execries_contronic_mailbox.models.repository;

import com.example.execries_contronic_mailbox.models.model.Mail;

import java.util.List;

public interface IMailRepository {
    List<Mail> display();

    List<String> displayLang();

    List<Integer> displayPage();

    Mail showFormEdit();

    void edit(Mail mail);

}
