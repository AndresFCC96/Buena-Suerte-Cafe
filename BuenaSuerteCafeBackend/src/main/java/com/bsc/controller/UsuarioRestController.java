package com.bsc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bsc.domain.Usuario;
import com.bsc.DTO.UsuarioDto;
import com.bsc.service.UsuarioService;

@RestController
@RequestMapping("/api/usuario")
public class UsuarioRestController {
	
	@Autowired
	private UsuarioService usuarioService;
	
	@GetMapping("/consultarPorEmail")
	public ResponseEntity<?> consultarUsuarioEmail(@RequestParam("email") String email){
		
		try {
			return ResponseEntity.ok().body(usuarioService.consultarUsuarioPorEmail(email));
		}catch (Exception e) {
			// TODO: handle exception
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
		}
		
	}
	@PostMapping("/guardarUsuario")
	public ResponseEntity<?> guardarUsuario(@RequestBody() UsuarioDto usuarioDto){
		try {
			usuarioService.registarUsuario(usuarioDto);
			return ResponseEntity.ok().body(usuarioDto);
		} catch (Exception e) {
			// TODO: handle exception
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
		}
	}
}
