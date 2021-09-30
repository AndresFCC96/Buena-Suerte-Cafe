package com.bsc.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bsc.domain.Blogs;

public interface BlogRepository extends JpaRepository<Blogs, Integer>{

}
