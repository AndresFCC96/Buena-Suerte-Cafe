package service;

import org.springframework.stereotype.Service;

import com.bsc.domain.Usuario;

@Service
public interface UsuarioService {
	/**
	 * @throws Exception
	 */
	public Usuario consultarUsuarioPorEmail(String email) throws Exception;
}
