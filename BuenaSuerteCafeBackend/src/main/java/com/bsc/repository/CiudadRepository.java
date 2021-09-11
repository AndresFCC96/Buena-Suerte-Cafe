package com.bsc.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.bsc.domain.Ciudad;

public interface CiudadRepository extends JpaRepository<Ciudad, Integer> {
	public Ciudad findByCityid(@Param("id") Integer id);
}
