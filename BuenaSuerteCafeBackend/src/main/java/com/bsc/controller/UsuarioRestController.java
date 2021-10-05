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
import com.bsc.dto.UsuarioDto;
import com.bsc.service.UsuarioService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/usuario")
public class UsuarioRestController {
	
	@Autowired
	private UsuarioService usuarioService;
	
	@GetMapping("/ValidateLogIn")
	public ResponseEntity<?> validateLogIn(@RequestParam("email") String email, @RequestParam("password") String password){
		try {
			return ResponseEntity.ok().body(usuarioService.ValidateUsuario(email, password));
		}catch (Exception e) {
			// TODO: handle exception
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
		}
	}
	
	@GetMapping("/consultarUsuarioPorId")
	public ResponseEntity<?> consultarUsuarioPorId(@RequestParam("id") Integer id){
		//Hacemos un bloque de try catch para controlar los posibles errores
		try {
			//En caso de que exista un cliente con el nombre mandado por parametro lo devuelve
			return ResponseEntity.ok(usuarioService.consultarUsuarioPorId(id));
		} catch (Exception e) {
			//En caso de no encontrar clientes devuelve un Internal Server Error con la excepcion 
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
		}
	}
	
	@GetMapping("/consultarTodosLosUsuarios")
	public ResponseEntity<?> consultarUsuarios(){
		
		try {
			return ResponseEntity.ok().body(usuarioService.consultarTodosLosUsuarios());
		}catch (Exception e) {
			// TODO: handle exception
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
		}
		
	}
	
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
