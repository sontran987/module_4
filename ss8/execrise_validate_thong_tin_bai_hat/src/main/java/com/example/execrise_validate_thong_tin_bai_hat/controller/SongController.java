package com.example.execrise_validate_thong_tin_bai_hat.controller;

import com.example.execrise_validate_thong_tin_bai_hat.dto.SongDto;
import com.example.execrise_validate_thong_tin_bai_hat.model.model.Song;
import com.example.execrise_validate_thong_tin_bai_hat.model.service.ISongService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;

@Controller
public class SongController {
    @Autowired
    private ISongService songService;
    @GetMapping("")
    public String home(Model model){
        model.addAttribute("song",songService.displaySong());
        return "display";
    }
    @GetMapping("/create")
    public String showFormCreate(Model model){
        model.addAttribute("song",new SongDto());
        return "create";
    }
    @PostMapping("/create")
    public String create(@Valid @ModelAttribute SongDto songDto,
                         BindingResult bindingResult,
                         RedirectAttributes redirectAttributes, Model model){

        if (bindingResult.hasErrors()){
            model.addAttribute("song",songDto);
            return "create";
        }
        Song song = new Song();
        BeanUtils.copyProperties(songDto,song);
        songService.createSong(song);
        return "redirect:";
    }
    @GetMapping("/update/{id}")
    public String showFormUpdate(@PathVariable Integer id, Model model){
        if (songService.detailSong(id) == null){
            model.addAttribute("song",songService.displaySong());
            return "display";
        }
        model.addAttribute("song",songService.detailSong(id));
        return "update";
    }
}
