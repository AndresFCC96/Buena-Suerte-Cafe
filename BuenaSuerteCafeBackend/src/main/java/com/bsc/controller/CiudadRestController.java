package com.bsc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.bsc.service.CiudadService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/ciudad")
public class CiudadRestController {
	@Autowired
	private CiudadService ciudadService;
	
	@GetMapping("/consultarciudades")
	public ResponseEntity<?> consultarUsuarioEmail(){
		
		try {
			return ResponseEntity.ok().body(ciudadService.consultarCiudades());
		}catch (Exception e) {
			// TODO: handle exception
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
		}
		
	}
}
