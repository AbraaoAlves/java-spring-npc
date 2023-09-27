package com.npc.app.model;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class UsuarioTests {
    
    @Test
    void verificaDados(){
		String id = "12345";
		String name = "Abraao alves";
		String email = "mail@mail.com";
		String password = "12345";

		Usuario usuario = new Usuario(id, name, email, password);

        assertEquals(usuario.getId(), id);
        assertEquals(usuario.getName(), name);
        assertEquals(usuario.getEmail(), email);
        assertNotEquals(usuario.getPassword(), password);
    }
}
