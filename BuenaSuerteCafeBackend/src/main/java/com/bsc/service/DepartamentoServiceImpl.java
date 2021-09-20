package com.bsc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bsc.domain.Departamento;
import com.bsc.repository.DepartamentoRepository;

@Service
public class DepartamentoServiceImpl implements DepartamentoService {
	@Autowired
	private DepartamentoRepository departamentoRepository;

	@Override
	public List<Departamento> consultarDepartamentos() throws Exception {
		// TODO Auto-generated method stub
		return departamentoRepository.findAll();
	}
	
	
}
