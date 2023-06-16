package com.example.exercise_2.service.impl;

import com.example.exercise_2.service.IDictionnaryService;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class DictionaryService implements IDictionnaryService {
    private static Map<String, String> dictionary = new HashMap<>();

    static {
        dictionary.put("board", "bảng");
        dictionary.put("apple", "táo");
        dictionary.put("banana", "chuối");
        dictionary.put("mango", "xoài");
        dictionary.put("strawberry", "dâu");
        dictionary.put("Orange", "cam");
        dictionary.put("goose", "ngỗng");
        dictionary.put("chicken", "gà");
        dictionary.put("pig", "lợn");
        dictionary.put("cat", "mèo");
        dictionary.put("dog", "chó");
    }

    @Override
    public String search(String search) {
        String result = "The dictionary has not updated this word yet";
        for (String s : dictionary.keySet()) {
            if (s.equals(search.toLowerCase())) {
                return dictionary.get(s);
            }
        }
        return result;
    }
}
