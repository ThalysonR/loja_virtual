package com.itbam.lojavirtual.controllers;

import com.itbam.lojavirtual.domain.Produto;
import com.itbam.lojavirtual.services.ProdutoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/produto")
public class ProdutoController {
    @Autowired
    ProdutoService produtoService;

    @GetMapping(params = {"page", "size"})
    public Page<Produto> getProdutos(@RequestParam("page") int page, @RequestParam("size") int size) {
        return produtoService.getProdutos(PageRequest.of(page, size));
    }

    @GetMapping(path = "/{id}")
    public Produto getProduto(@PathVariable("id") Long id) {
        return produtoService.getProduto(id);
    }

    @PostMapping
    public Produto cadastraProduto(@RequestBody Produto produto) {
        return produtoService.cadastraProduto(produto);
    }

    @PutMapping(path = "/{id}")
    public Produto updateProduto(@PathVariable("id") Long id,@RequestBody Produto produto) {
        return produtoService.updateProduto(id, produto);
    }

    @DeleteMapping("/{id}")
    public void deleteProduto(@PathVariable("id") Long id) {
        produtoService.deleteProduto(id);
    }
}