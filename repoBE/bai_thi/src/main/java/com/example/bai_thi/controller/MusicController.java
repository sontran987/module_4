package com.example.bai_thi.controller;

import com.example.bai_thi.dto.MusicDto;
import com.example.bai_thi.model.Music;
import com.example.bai_thi.service.IMusicService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin("*")
@RestController
public class MusicController {
    @Autowired
    private IMusicService musicService;

    @GetMapping("/music/{page}/{limit}")
    public ResponseEntity<Page<Music>> getlistMusic(@PathVariable(value = "page",required = false) Integer page, @PathVariable(value = "limit",required = false) Integer limit) {
        Pageable pageable = PageRequest.of(page,limit);
        if (this.musicService.getMusic(pageable).isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(this.musicService.getMusic(pageable), HttpStatus.OK);
    }
    @PostMapping("/music")
    public ResponseEntity<?> createMusic(@Valid @RequestBody MusicDto musicDto, BindingResult bindingResult){
        if (bindingResult.hasErrors()){
            List<String> errors = bindingResult.getFieldErrors()
                    .stream()
                    .map(DefaultMessageSourceResolvable::getDefaultMessage)
                    .collect(Collectors.toList());
            return new ResponseEntity<>(errors.toString(), HttpStatus.BAD_REQUEST);
        }
        Music music = new Music();
        BeanUtils.copyProperties(musicDto,music);
        musicService.createMusic(music);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PutMapping("/music/{id}")
    public ResponseEntity<?> updateMusic(@PathVariable(value = "id", required = false) int id){
        musicService.updateMusic(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @DeleteMapping("/music/{id}")
    public ResponseEntity<?> deleteMusic(@PathVariable(value = "id",required = false) int id){
        musicService.deleteMusic(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @GetMapping("/search/{name}")
    public ResponseEntity<List<Music>> searchMusic(@PathVariable(value = "name",required = false) String name){
        return new ResponseEntity<>(musicService.searchMusic(name),HttpStatus.OK);
    }

}
