package model;
import java.util.Scanner;

/*
 Mapear a class Usuario com os decorator do SpringData (anotations)
 Criar um static UsuarioSpecifications na pasta repository
 Criar um UsuariosRepository na pasta repository*/

@Entity
public class Usuario {

@Id
@GeneratedValue
/*Criar class de Usuario na pasta model com os campos: ID único, nome, endereço de e-mail, senha*/
private Long id;
private String name;
private String email;
private string password;

   /*Constructor.*/

  public Usuario(String name, String email, string password) {
   this.name = name;
   this.email = email;
   this.senha = password;
  }

}