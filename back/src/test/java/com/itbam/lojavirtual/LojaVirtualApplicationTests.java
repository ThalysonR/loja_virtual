package com.itbam.lojavirtual;

import static org.junit.Assert.assertEquals;

import com.itbam.lojavirtual.domain.Produto;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.util.Assert;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles(profiles = "integrationtest")
public class LojaVirtualApplicationTests {

	@LocalServerPort
	private int port;

	@Autowired
	TestRestTemplate restTemplate;
	
	@Test
	public void testeCriaProduto() {
		Produto produto = new Produto();
		produto.setNome("bola");
		produto.setDescricao("redonda");
		produto.setPreco(2.75d);

		ResponseEntity<Produto> response = restTemplate.postForEntity("/produto", produto, Produto.class);
		assertEquals(HttpStatus.OK, response.getStatusCode());

		Assert.notNull(response.getBody(), "Pedido foi null");
	}

}
