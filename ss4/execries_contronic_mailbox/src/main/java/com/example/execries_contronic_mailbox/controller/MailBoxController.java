package com.example.execries_contronic_mailbox.controller;

import com.example.execries_contronic_mailbox.models.model.Mail;
import com.example.execries_contronic_mailbox.models.service.IMailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class MailBoxController {
    @Autowired
    private IMailService mailService;
    @GetMapping("")
    public String home(Model model){
        model.addAttribute("list",mailService.display());
        return "index";
    }

    @GetMapping("/mailbox")
    public String showFormEdit(Model model){
        Mail mail = mailService.showFormEdit();
        model.addAttribute("mail",mail);
        model.addAttribute("languages",mailService.displayLang());
        model.addAttribute("pages",mailService.displayPage());
        return "showFormEdit";
    }
    @PostMapping("/edit")
    public String edit(@ModelAttribute Mail mail, RedirectAttributes redirectAttributes ){
        mailService.edit(mail);
        String message = "update success";
        redirectAttributes.addFlashAttribute("msg",message);
        return "redirect:/";
    }
}
