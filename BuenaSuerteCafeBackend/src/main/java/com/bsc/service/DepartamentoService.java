package com.bsc.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.bsc.domain.Departamento;

@Service
public interface DepartamentoService {
	public List<Departamento> consultarDepartamentos() throws Exception;
}
