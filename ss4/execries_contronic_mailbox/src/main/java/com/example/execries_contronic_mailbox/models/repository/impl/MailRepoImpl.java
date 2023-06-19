package com.example.execries_contronic_mailbox.models.repository.impl;

import com.example.execries_contronic_mailbox.models.model.Mail;
import com.example.execries_contronic_mailbox.models.repository.IMailRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
@Repository
public class MailRepoImpl implements IMailRepository {
    private static List<Mail> list = new ArrayList<>();
    private static List<String> languages= new ArrayList<>();
    private static List<Integer> pageSizes=new ArrayList<>();
    static{
        pageSizes.add(5);
        pageSizes.add(10);
        pageSizes.add(15);
        pageSizes.add(25);
        pageSizes.add(50);
        pageSizes.add(100);
        languages.add("English");
        languages.add("Vietnamese");
        languages.add("Japanese");
        languages.add("Chinese");
        list.add(new Mail(1,"English",5,true,"thanhson"));
    }
    @Override
    public List<Mail> display() {
        return list;
    }

    @Override
    public List<String> displayLang() {
        return languages;
    }

    @Override
    public List<Integer> displayPage() {
        return pageSizes;
    }

    @Override
    public Mail showFormEdit() {
        Mail mail = null;
        for (int i = 0; i < list.size(); i++) {
            mail = list.get(i);
        }
        return mail ;
    }

    @Override
    public void edit(Mail mail) {
        for (int i = 0; i < list.size(); i++) {
            if (list.get(i).getId()== mail.getId()){
                list.set(i,mail);
                break;
            }
        }
    }
}
