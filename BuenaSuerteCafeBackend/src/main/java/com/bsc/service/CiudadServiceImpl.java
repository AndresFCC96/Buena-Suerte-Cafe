package com.bsc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bsc.domain.Ciudad;
import com.bsc.repository.CiudadRepository;

@Service
public class CiudadServiceImpl implements CiudadService {
	
	@Autowired
	private CiudadRepository ciudadRepository;

	@Override
	public Ciudad consultarCiudadPorId(Integer id) throws Exception {
		// TODO Auto-generated method stub
		if(id == null) {
			throw new Exception("id invalido");
		}
		return ciudadRepository.findByCityid(id);
	}

	@Override
	public List<Ciudad> consultarCiudades() throws Exception {
		// TODO Auto-generated method stub
		return ciudadRepository.findAll();
	}

}
