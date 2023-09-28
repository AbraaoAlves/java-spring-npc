package com.npc.app.repository;

import org.springframework.stereotype.Repository;
import com.npc.app.model.Usuario;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface UsuariosRepository extends JpaRepository<Usuario, UUID> {
    
} 
