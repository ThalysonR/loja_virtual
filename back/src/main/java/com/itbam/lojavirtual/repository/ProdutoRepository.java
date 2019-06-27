package com.itbam.lojavirtual.repository;

import com.itbam.lojavirtual.domain.Produto;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdutoRepository extends PagingAndSortingRepository<Produto, Long> {
    
}