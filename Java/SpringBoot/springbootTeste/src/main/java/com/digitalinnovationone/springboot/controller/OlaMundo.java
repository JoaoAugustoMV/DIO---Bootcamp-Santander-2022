package com.digitalinnovationone.springboot.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OlaMundo {
    
    @GetMapping("/") // "/" url
    public String mensagem(){
        return "Ola mundo";
    }
}
