package com.bsc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.bsc.dto.ProductoDto;
import com.bsc.service.ProductoService;


@CrossOrigin("*")
@RestController
@RequestMapping("/api/producto")
public class ProductoRestController {
	
	@Autowired
	private ProductoService productoService;
	
	@GetMapping("/consultarProductos")
	public ResponseEntity<?> consultarProductos(){
		
		try {
			return ResponseEntity.ok(productoService.consultarTodosLosProductos());
		}catch (Exception e) {
			// TODO: handle exception
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
		}
		
	}
	
	@GetMapping("/consultarProductoPorId")
	public ResponseEntity<?> consultarProductoPorId(@RequestParam("id") Integer id){
		//Hacemos un bloque de try catch para controlar los posibles errores
		try {
			return ResponseEntity.ok(productoService.consultarProductoPorId(id));
		} catch (Exception e) {
			//En caso de no encontrar clientes devuelve un Internal Server Error con la excepcion 
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
		}
	}
	
	@PostMapping("/crearProducto")
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<?> crearNuevoProducto(@RequestBody ProductoDto productoDTO) {
		try {
			productoService.guardarProducto(productoDTO);
			
			return ResponseEntity.ok(productoDTO);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
		}
	}

	
	@PutMapping("/actualizarProducto")
	public ResponseEntity<?> actualizarProducto(@RequestBody ProductoDto productoDTO){
		
		try {
			productoService.actualizarProducto(productoDTO);	
			return ResponseEntity.ok(productoDTO);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
		}

	}
	
	@DeleteMapping("/eliminarProducto")
	public ResponseEntity<?> eliminarProducto(@RequestParam("id") Integer id){
		
		try {
			productoService.eliminarProducto(id);	
			return ResponseEntity.ok(id);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
		}

	}
}
