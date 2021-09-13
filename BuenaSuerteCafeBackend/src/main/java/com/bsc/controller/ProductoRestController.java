package com.bsc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bsc.service.ProductoService;

@CrossOrigin()
@RestController
@RequestMapping("/api/producto")
public class ProductoRestController {
	
	@Autowired
	private ProductoService productoService;
	
	@GetMapping("/consultarProductos")
	public ResponseEntity<?> consultarUsuarioEmail(){
		
		try {
			return ResponseEntity.ok().body(productoService.consultarTodosLosProductos());
		}catch (Exception e) {
			// TODO: handle exception
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
		}
		
	}
}
