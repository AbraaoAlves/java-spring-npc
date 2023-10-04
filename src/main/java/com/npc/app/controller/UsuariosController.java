package com.npc.app.controller;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.npc.app.model.Usuario;
import com.npc.app.service.UsuariosService;

import jakarta.validation.Valid;

@CrossOrigin(origins = "http://localhost:8080")
@RequestMapping("/api/users")
@RestController
public class UsuariosController {

  final UsuariosService service;

  public UsuariosController(UsuariosService service) {
    this.service = service;
  }

  // http://localhost:8080/api/users/all
  @GetMapping()
  public ResponseEntity<Page<Usuario>> getAll(
      @PageableDefault(page = 0, size = 10, sort = "id", direction = Sort.Direction.ASC) Pageable pageable) {
    
      return ResponseEntity.status(HttpStatus.OK).body(service.findAll(pageable));
  }

  @GetMapping("/{id}")
  public ResponseEntity<Object> get(@PathVariable(value = "id") UUID id) {
    Optional<Usuario> data = service.getById(id);
    
    if (!data.isPresent()) {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario not found.");
    } 
    
    return ResponseEntity.status(HttpStatus.OK).body(data.get());
  }

  @PostMapping
  public ResponseEntity<Object> create(@RequestBody @Valid Usuario dto) {
    // validate fields

    return ResponseEntity.status(HttpStatus.CREATED).body(service.save(dto));
  }

  @PutMapping("/{id}")
  public ResponseEntity<Object> update(@PathVariable(value = "id") UUID id, @RequestBody @Valid Usuario dto) {
    // validate fields
    if (!service.getById(id).isPresent()) {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario not found.");
    }
    dto.setId(id);
    return ResponseEntity.status(HttpStatus.CREATED).body(service.save(dto));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Object> delete(@PathVariable(value = "id") UUID id){
    // validate if exist

    service.delete(id);
    return ResponseEntity.status(HttpStatus.OK).body("User Deleted successfully."); 
  }
}
