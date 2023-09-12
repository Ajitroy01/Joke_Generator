package com.masai;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.masai.service.ChatGPTService;

@RestController
public class JokeController {

	@Autowired
    private  ChatGPTService chatGptService;

    @GetMapping("/joke")
    public ResponseEntity<String> generateJoke(@RequestParam String keyword) {
        ResponseEntity<String> responseEntity = chatGptService.generateJoke(keyword);
        return responseEntity;
    }
}

