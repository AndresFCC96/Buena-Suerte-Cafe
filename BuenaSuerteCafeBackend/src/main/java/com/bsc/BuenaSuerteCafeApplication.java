package com.bsc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.bsc.domain.Usuario;

@SpringBootApplication
public class BuenaSuerteCafeApplication {

	public static void main(String[] args) {
		SpringApplication.run(BuenaSuerteCafeApplication.class, args);
		Usuario usuario = new Usuario();
		System.out.println(usuario.getUserID());
	}

}
