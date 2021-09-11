package com.bsc.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bsc.dto.UsuarioDto;
import com.bsc.domain.Usuario;
import com.bsc.repository.CiudadRepository;
import com.bsc.repository.UsuarioRepository;

@Service
public class UsuarioServiceImpl implements UsuarioService {
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@Autowired
	private CiudadRepository ciudadRepository;

	@Override
	public Usuario consultarUsuarioPorEmail(String email) throws Exception {
		// TODO Auto-generated method stub
		if(email == "" || email == null) {
			throw new Exception("email invalido");
		}
		Optional<Usuario> usuario = Optional.ofNullable(usuarioRepository.findByEmail(email));
		
		if(usuario.isPresent()) {
			return usuario.get();
		}else {
			throw new Exception("usuario no existe");
		}
	}

	@Override
	public void registarUsuario(UsuarioDto usuarioDto) throws Exception {
		// TODO Auto-generated method stub
		
		Usuario usuario = new Usuario();
		
		if(usuarioDto.getFirstName() == "" || usuarioDto.getFirstName() == null) {
			throw new Exception("primer nombre invalido");
		}
		if(usuarioDto.getLastname() == null || usuarioDto.getLastname() == "" ) {
			throw new Exception("apellido invalido");
		}
		if(usuarioDto.getEmail() == null || usuarioDto.getEmail() == "" ) {
			throw new Exception("apellido invalido");
		}
		if(usuarioDto.getDocumentype() == null || usuarioDto.getDocumentype() == "" ) {
			throw new Exception("tipo de documento invalido");
		}
		if(usuarioDto.getDocumentnumber() == null ||usuarioDto.getDocumentnumber() == "" ) {
			throw new Exception("numero de documento invalido");
		}
		
		if(usuarioDto.getPhone() == null) {
			throw new Exception("numero de telefono invalido");
		}
		
		if(usuarioDto.getAddress() == null || usuarioDto.getAddress() == "") {
			throw new Exception("dirección invalida");
		}
		
		
		if(usuarioDto.getGender() == null || usuarioDto.getGender() == "") {
			throw new Exception("genero invalido");
		}
		
		if(usuarioDto.getPassword() == null || usuarioDto.getPassword() == "") {
			throw new Exception("contraseña invalida");
		}
		
		if(usuarioDto.getRole() == null || usuarioDto.getRole() == "") {
			throw new Exception("contraseña invalida");
		}
		
		if(usuarioDto.getRole() == null || usuarioDto.getRole() == "") {
			throw new Exception("contraseña invalida");
		}
		if(usuarioDto.getCityid() == null) {
			throw new Exception("ciudad invalida");
		}
		if(usuarioDto.getState() == null || usuarioDto.getState() == "") {
			throw new Exception("estado invalido");
		}
		if(usuarioDto.getCreatedby() == null || usuarioDto.getCreatedby() == "") {
			throw new Exception("usuario creacion invalido");
		}
		
		if(usuarioDto.getCreationdate() == null) {
			throw new Exception("fecha creacion invalido");
		}
		
		usuario.setFirstName(usuarioDto.getFirstName());
		usuario.setLastname(usuarioDto.getLastname());
		usuario.setEmail(usuarioDto.getEmail());
		usuario.setDocumentype(usuarioDto.getDocumentype());
		usuario.setDocumentnumber(usuarioDto.getDocumentnumber());
		usuario.setPhone(usuarioDto.getPhone());
		usuario.setAddress(usuarioDto.getAddress());
		usuario.setGender(usuarioDto.getGender());
		usuario.setPassword(usuarioDto.getPassword());
		usuario.setRole(usuarioDto.getRole());
		
		usuario.setCityid(ciudadRepository.findByCityid(usuarioDto.getCityid()));
		usuario.setState(usuarioDto.getState());
		usuario.setCreatedby(usuarioDto.getCreatedby());
		usuario.setCreationdate(usuarioDto.getCreationdate());
		
		usuarioRepository.save(usuario);
	}

}
