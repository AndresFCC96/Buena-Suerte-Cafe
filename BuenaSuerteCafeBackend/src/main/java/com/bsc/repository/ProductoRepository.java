package com.bsc.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bsc.domain.Producto;

public interface ProductoRepository extends JpaRepository<Producto, Integer>{

}
