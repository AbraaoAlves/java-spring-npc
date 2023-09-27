package com.npc.app.model;

import java.util.Scanner;

/* Mapear a class Usuario com os decorator do SpringData (anotations)*/
@Entity
@Id
@GeneratedValue
public class Usuario {

/*Criar class de Usuario na pasta model com os campos: ID único, nome, endereço de e-mail, senha*/
    private String id;
    private String name;
    private String email;
    private String password;

    /* Constructor. */

    public Usuario(String id, String name, String email, String password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    public String getId() {
        return id;
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
