package com.npc.app.model;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class UsuarioTests {
    
    @Test
    void checkData(){
		String name = "Abraao alves";
		String email = "mail@mail.com";
		String password = "12345";

		Usuario usuario = new Usuario(name, email, password);

        assertNotNull(usuario.getId());
        assertTrue(usuario.getId().isEmpty());
        assertEquals(usuario.getName(), name);
        assertEquals(usuario.getEmail(), email);
        assertNotEquals(usuario.getPassword(), password);
    }
}
