package com.bsc.service;

import org.springframework.stereotype.Service;

import com.bsc.domain.Ciudad;

@Service
public interface CiudadService {
	public Ciudad consultarCiudadPorId(Integer id)throws Exception;
}
