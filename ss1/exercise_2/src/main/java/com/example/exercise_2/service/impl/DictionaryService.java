package com.example.exercise_2.service.impl;

import com.example.exercise_2.repository.IDictionaryRepository;
import com.example.exercise_2.service.IDictionnaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class DictionaryService implements IDictionnaryService {
    @Autowired
    private IDictionaryRepository dictionaryRepository;
    @Override
    public String search(String search) {
        return dictionaryRepository.search(search);
    }
}
