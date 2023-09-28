package com.npc.app.model;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

// import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class UsuarioTests {
    
    void verificaDados(){
		// String id = "12345";
		String name = "Abraao alves";
		String email = "mail@mail.com";
		String password = "12345";

		Usuario usuario = new Usuario(name, email, password);

        assertNotNull(usuario.getId());
        assertEquals(usuario.getName(), name);
        assertEquals(usuario.getEmail(), email);
        assertNotEquals(usuario.getPassword(), password);
    }
}
