package com.npc.app.model;

import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

/* Mapear a class Usuario com os decorator do SpringData (anotations)*/
@Entity
public class Usuario {
    
    /*Criar class de Usuario na pasta model com os campos: ID único, nome, endereço de e-mail, senha*/
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    private String name;
    private String email;
    private String password;

    /* Constructor. */

    public Usuario(String name, String email, String password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    public String getId() {
        return id.toString();
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return "###########";
    }

}
