package com.bsc.service;

import org.springframework.stereotype.Service;

import com.bsc.dto.UsuarioDto;
import com.bsc.domain.Usuario;

@Service
public interface UsuarioService {
	/**
	 * @throws Exception
	 */
	public Usuario consultarUsuarioPorEmail(String email) throws Exception;
	
	public Usuario ValidateUsuario(String email, String password) throws Exception;
	
	public void registarUsuario(UsuarioDto usuario) throws Exception;
}
