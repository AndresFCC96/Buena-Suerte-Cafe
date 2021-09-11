package com.bsc.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bsc.domain.Usuario;
import com.bsc.repository.UsuarioRepository;

@Service
public class UsuarioServiceImpl implements UsuarioService {
	
	@Autowired
	private UsuarioRepository usuarioRepository;

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

}
