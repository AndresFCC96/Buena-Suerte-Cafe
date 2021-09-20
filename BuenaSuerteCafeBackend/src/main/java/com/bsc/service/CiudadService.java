package com.bsc.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.bsc.domain.Ciudad;

@Service
public interface CiudadService {
	public Ciudad consultarCiudadPorId(Integer id) throws Exception;
	
	public List<Ciudad> consultarCiudades() throws Exception;
}
