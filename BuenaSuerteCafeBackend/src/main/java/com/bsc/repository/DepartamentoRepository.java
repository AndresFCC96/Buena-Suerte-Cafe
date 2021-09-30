package com.bsc.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bsc.domain.Departamento;

public interface DepartamentoRepository extends JpaRepository<Departamento, Integer> {

}
