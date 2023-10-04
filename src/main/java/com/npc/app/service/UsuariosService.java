package com.npc.app.service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.npc.app.model.Usuario;
import com.npc.app.repository.UsuariosRepository;

import jakarta.transaction.Transactional;

@Service
public class UsuariosService {
  final UsuariosRepository repo;
  public UsuariosService(UsuariosRepository repo) {
    this.repo = repo;
  }  

  @Transactional
  public Usuario save(Usuario model) {
    return repo.save(model);
  }
  
  public Optional<Usuario> getById(UUID id){
    return repo.findById(id);
  }
  
  public Page<Usuario> findAll(Pageable page) {
    return repo.findAll(page);
  }

  public List<Usuario> findAll() {
    return repo.findAll();
  }

  @Transactional
  public void delete(UUID id){
    repo.deleteById(id);
  }



  
}
