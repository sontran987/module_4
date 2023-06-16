package com.example.exercise_2.repository.impl;

import com.example.exercise_2.repository.IDictionaryRepository;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.Map;
@Repository
public class DictionaryRepositoryImpl implements IDictionaryRepository {
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
