package com.itbam.lojavirtual.services;

import javax.persistence.EntityNotFoundException;

import com.itbam.lojavirtual.domain.Produto;
import com.itbam.lojavirtual.repository.ProdutoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
public class ProdutoService {
    @Autowired
    ProdutoRepository produtoRepository;

    public Page<Produto> getProdutos(PageRequest request) {
        return produtoRepository.findAll(request);
    }

    public Produto getProduto(Long id) {
        return produtoRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Produto não encontrado."));
    }

    public Produto cadastraProduto(Produto produto) {
        return produtoRepository.save(produto);
    }

    public Produto updateProduto(Long id, Produto produto) {
        if(!produtoRepository.existsById(id)) throw new EntityNotFoundException("Produto não encontrado.");
        produto.setId(id);
        return produtoRepository.save(produto);
    }

    public void deleteProduto(Long id) {
        Produto produto = produtoRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Produto não encontrado."));
        produtoRepository.delete(produto);
    }
}