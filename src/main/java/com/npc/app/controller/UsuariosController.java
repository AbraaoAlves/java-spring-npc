package com.npc.app.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:8080")
@RequestMapping("/api/users")
@RestController
public class UsuariosController {
  
  //http://localhost:8080/api/users/all
  @GetMapping("/all")
  public List<String> getAll(){
    return Arrays.asList("Abraão", "Kilvia", "Thomas", "Sophia");    
  }
  
  //http://localhost:8080/api/users/abraao
  @GetMapping("/abraao")
  public String getAbraao(){
    return "{ \"response\": \"Abraao Alves Teodosio Filho\"}";
  }
}
